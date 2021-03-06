import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IntPaper } from '../../models/IntPaper';
import { ISymposium } from '../../models/ISymposium';
import { AuthService } from '../../services/auth.service';
import { PaperService } from '../../services/paper.service';

@Component({
  selector: 'app-paper-form',
  templateUrl: './paper-form.component.html',
  styleUrls: ['./paper-form.component.css']
})
export class PaperFormComponent implements OnInit {

  @Input() paper: any;
  @Input() simposios: any[];
  @Output() paperEmitter = new EventEmitter<any>();
  @Output() sendEmitter = new EventEmitter<any>();
  @Output() cancelPaper = new EventEmitter();
  formPaper: FormGroup;
  submitted = false;
  autoresList = [];
  fileToUpload: File | null = null;


  constructor(private formBuilder: FormBuilder,
              private paperService: PaperService,
              private auth: AuthService,
              private toastr: ToastrService,
              ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.formPaper = this.formBuilder.group({
      nombre: [this.paper.nombre, [Validators.required]],
      simposio: [this.paper.idSimposio, [Validators.required]],
      archivo: [null],
      autores: ['', [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    });
    if (this.paper) {
      if (this.paper.autores_registrados){
        const autoresOK = this.paper.autores_registrados.map((x: any) => {
          return {mail: x, status: true};
        });
        this.autoresList =  this.autoresList.concat(autoresOK);
      }
      if (this.paper.autores_no_registrados) {
        const autoresNoOK = this.paper.autores_no_registrados.map((x: any) => {
          return {mail: x, status: false};
        });
        this.autoresList =  this.autoresList.concat(autoresNoOK);
      }
    }
    console.log(this.autoresList);
  }

  cancel(): void {
    this.cancelPaper.emit();
  }

  nuevoArchivo(): void {
    this.paper.archivo = '';
  }


/**
 * Recibe el formControl Autor, revisa que no este vac??o y que cumpla con el patron
 * Revisa que no exista en AutoresList
 * Si no existe chequea que este asociado a una cuenta v??lida
 * Si esta asociado lo agrega al autoresList con estado Ok
 * Si no esta asociado env??a mail de invitaci??n.
 * @returns Vuelve al formulario si existe un usuario con el mail seleccionado
 */
  addAutor(): void {
    if (this.formPaper.controls.autores.value && !this.formPaper.controls.autores.errors?.pattern){
      const autor = this.formPaper.controls.autores.value;
      const exist = this.autoresList.some((item: any) => {
        if (item.mail === autor) {
          return true;
        }
      });
      if (exist) {
        this.toastr.info('Ya existe un usuario con el email ingresado.');
        return null;
      }
      this.paperService.checkAutor(autor).subscribe((res: any) => {
        if (res.data){
          // this.paper.autores.push(autor);
          this.autoresList.push({mail: autor, status: true});

        }
      else{
        this.toastr.info('El autor ingresado no est?? registrado en el sistema. \n' +
        'Recuerde que todos los autores deben estar registrados para poder enviar a correcci??n \n' +
        'Descuida, puedes guardar tus cambios hasta que este usuario cree su perfil\n' +
        'No te preocupes, nosotros le enviaremos un mail a este nuevo autor');
        this.autoresList.push({mail: autor, status: false});
      }
      });
      this.formPaper.controls.autores.reset();
    }
    else{
      this.toastr.warning('Ingrese un email v??lido')
    }
  }

  /**
   *
   * @param autor
   * Recibe un objeto autor {mail , status}
   * Lo elimina de la lista de autores
   * Lo elimina del atributo autores del Paper
   * Realiza el put en el paper, para guardar los cambios
   */

  delAutor(autor: any): void {
    this.autoresList = this.autoresList.filter((x: any) => {
      if (x.mail !== autor.mail){
        return x;
      }
      return null;
    });
    this.paper.autores = this.autoresList.map((x: any) => {
        return x.mail;
    });
  }

  /**
   * Guarda provisoriamente los datos del congreso en la BD.
   */
  save(): void {
    if (!this.paper.id && !this.formPaper.controls.archivo.value) {
      this.toastr.warning('Por Favor, suba un archivo');
      return;
    }
    const userId = this.auth.getUserId();
    this.paper = {
      archivo: this.fileToUpload,
      autores: this.autoresList.map((item: any) => {
        return item.mail;
      }),
      id: this.paper.id || '',
      estado: 'sin subir',
      nombre: this.formPaper.controls.nombre.value,
      responsable: userId,
      simposio: this.formPaper.controls.simposio.value,
    };
    this.paperEmitter.emit(this.paper);
  }

  handleFileInput(files: FileList): void {
    this.fileToUpload = files.item(0);
  }

  submit(): void {
    this.submitted = true;
    if (this.formPaper.invalid || this.fileToUpload === null || this.formPaper.controls.simposio.value === '' ) {
      this.toastr.warning('Por favor complete todos los datos y suba el archivo nuevamente.');
      return;
    }
    const userId = this.auth.getUserId();
    this.paper = {
      archivo: this.fileToUpload,
      autores: this.autoresList.map((item: any) => {
        return item.mail;
      }),
      id: this.paper.id,
      estado: 'sin subir',
      nombre: this.formPaper.controls.nombre.value,
      responsable: userId,
      simposio: this.formPaper.controls.simposio.value,
    };
    this.sendEmitter.emit(this.paper);
  }

  getArchivo(): void {
   this.paperService.getPaperFile(this.paper.id).subscribe((res: any) => {
      const archivo: ArrayBuffer = res;
      const blob = new Blob([archivo], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      if (link.download !== undefined) {
        link.setAttribute('href', url);
        link.setAttribute('target', '_blank');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    });
  }

}
