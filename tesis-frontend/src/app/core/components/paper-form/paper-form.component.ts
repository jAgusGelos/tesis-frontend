import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPaper } from '../../models/IPaper';
import { AuthService } from '../../services/auth.service';
import { PaperService } from '../../services/paper.service';

@Component({
  selector: 'app-paper-form',
  templateUrl: './paper-form.component.html',
  styleUrls: ['./paper-form.component.css']
})
export class PaperFormComponent implements OnInit {


  @Input() paper: IPaper = {
    id: '',
    autores: ['Autor 1', 'Autor 2'],
    responsable: '',
    nombre: '',
    simposio: '',
    archivo: null,
  };
  @Output() paperEmitter = new EventEmitter<any>();
  @Output() cancelPaper = new EventEmitter();
  formPaper: FormGroup;
  simposios = ['Simposio 1', 'Simposio 2'];
  submitted = false;
  autoresList = [{mail: 'autor1@gmail.com', status: 'ok'}, {mail: 'autor2@gmail.com', status: 'not ok'}];
  fileToUpload: File | null = null;


  constructor(private formBuilder: FormBuilder,
              private paperService: PaperService,
              private auth: AuthService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.formPaper = this.formBuilder.group({
      nombre: [this.paper.nombre, [Validators.required]],
      simposio: [this.paper.simposio, [Validators.required]],
      archivo: [this.paper.archivo, [Validators.required]],
      autores: ['', [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    });
    // this.autoresList = this.paper.autores.map((item: string) => {
    //   this.paperService.checkAutor(item).subscribe((res: any) => {
    //     if (res.data === 'ok') {
    //       return {mail: item, status: 'ok'};
    //     }
    //     return {mail: item, status: 'Not ok'};
    //   });
    // });
  }

  cancel(): void {
    this.cancelPaper.emit();
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
      // this.paperService.checkAutor(autor).subscribe((res: any) => {
      //   if (res.data === 'ok'){
      //     this.paper.autores.push(autor)
      //     this.autoresList.push({mail: autor, status: 'ok'})
      //   }
      // else{
      //   if (confirm('El autor ' + autor + 'no existe.' +
      //   '\n¿Desea enviar un mail de invitación?')) {
      //     this.paperService.sendEmail(autor).subscribe((res: any) => {
      //       alert('El Email ha sido enviado.'+
      //       '\nRecuerde que no podrá subir un paper hasta que todos los autores estén confirmados.');
      //       this.autoresList.push({mail: autor, status: 'not ok'});
      //     });
      //     }

      // }
      // })
      this.autoresList.push({mail: autor, status: 'ok'});
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

    // this.paperService.putPaper(this.paper).subscribe((res: any) => {
    //   this.paper = res.data;
    //   alert('Autor Eliminado')
    // })

  }

  /**
   * Guarda provisoriamente los datos del congreso en la BD.
   */

  save(): void {

  }

  handleFileInput(files: FileList): void {
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload);

}

  submit(): void {
    this.submitted = true;
    if (this.formPaper.invalid || this.fileToUpload === null || this.formPaper.controls.simposio.value.trim() === '' ) {
      alert('Por favor complete todos los datos.');
      return;
    }
    const userId = this.auth.getUserId();
    this.paper = {
      archivo: this.fileToUpload,
      autores: this.autoresList.map((item: any) => {
        return item.mail;
      }),
      id: '',
      nombre: this.formPaper.controls.nombre.value,
      responsable: userId,
      simposio: this.formPaper.controls.simposio.value,
    };
    this.paperEmitter.emit([this.paper]);
  }

}
