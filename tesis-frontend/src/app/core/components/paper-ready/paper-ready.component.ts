import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { PaperService } from '../../services/paper.service';

@Component({
  selector: 'app-paper-ready',
  templateUrl: './paper-ready.component.html',
  styleUrls: ['./paper-ready.component.css']
})
export class PaperReadyComponent implements OnInit {
  @Input() paper: any;
  @Output() paperEmitter = new EventEmitter<any>();
  @Output() cancelPaper = new EventEmitter();
  formPaper: FormGroup;
  submitted = false;
  autoresList = [];
  fileToUpload: File | null = null;


  constructor(private formBuilder: FormBuilder,
              private paperService: PaperService,
              private auth: AuthService) { }

  ngOnInit(): void {
    console.log('Werein');

    window.scrollTo(0, 0);

    this.formPaper = this.formBuilder.group({
      nombre: [{value: this.paper.nombre, disabled: true}],
      nomSimposio: [{value: this.paper.nombre_simposio, disabled: true}],
      simposio: [this.paper.idSimposio],
      archivo: [null, [Validators.required]],
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
  }

  cancel(): void {
    this.cancelPaper.emit();
  }

  nuevoArchivo(): void {
    this.paper.archivo = '';
  }


/**
 * Recibe el formControl Autor, revisa que no este vacío y que cumpla con el patron
 * Revisa que no exista en AutoresList
 * Si no existe chequea que este asociado a una cuenta válida
 * Si esta asociado lo agrega al autoresList con estado Ok
 * Si no esta asociado envía mail de invitación.
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
        alert('Ya existe un usuario con ese Email ingresado');
        return null;
      }
      this.paperService.checkAutor(autor).subscribe((res: any) => {
        if (res.data){
          // this.paper.autores.push(autor);
          this.autoresList.push({mail: autor, status: true});

        }
      else{
        alert('El autor ingresado no está registrado en el sistema. \n' +
        'Recuerde que todos los autores deben estar registrados para poder enviar a corrección \n' +
        'Descuida, puedes guardar tus cambios hasta que este usuario cree su perfil\n' +
        'No te preocupes, nosotros le enviaremos un mail a este nuevo autor');
        this.autoresList.push({mail: autor, status: false});
      }
      });
      this.formPaper.controls.autores.reset();
    }
    else{
      alert('Ingrese un Email Válido');
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
    if (!this.formPaper.controls.archivo.value) {
      alert('Por favor suba un archivo');
      return;
    }
    if (confirm('¿Esta seguro que desea enviar el artículo?, luego de esto no existe marcha atras')) {
      const userId = this.auth.getUserId();
      this.paper = {
        archivo: this.fileToUpload,
        autores: this.autoresList.map((item: any) => {
          return item.mail;
        }),
        id: this.paper.id,
        estado: 'cameraReady',
        nombre: this.formPaper.controls.nombre.value,
        responsable: userId,
        simposio: this.formPaper.controls.simposio.value,
      };
      this.paperEmitter.emit(this.paper);
    }
  }

  handleFileInput(files: FileList): void {
    this.fileToUpload = files.item(0);
  }

}
