import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPaper } from '../../models/IPaper';
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
    responsable: 0,
    nombre: '',
    simposio: '',
    archivo: '',
  };
  @Output() paperEmitter = new EventEmitter<IPaper>();
  @Output() cancelPaper = new EventEmitter();
  formPaper: FormGroup;
  simposios = ['Simposio 1', 'Simposio 2'];
  submitted = false;
  autoresList = [{mail: 'autor1@gmail.com', status: 'ok'}, {mail: 'autor2@gmail.com', status: 'not ok'}];


  constructor(private formBuilder: FormBuilder,
              private paperService: PaperService) { }

  ngOnInit(): void {
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

  addAutor(): void {
    console.log(this.formPaper.controls.autores.errors?.pattern);

    if (this.formPaper.controls.autores.value && !this.formPaper.controls.autores.errors?.pattern){
      const autor = this.formPaper.controls.autores.value;
      // this.paperService.checkAutor(autor).subscribe((res: any) => {
      //   if (res.data === 'ok'){
      //     this.paper.autores.push(autor)
      //     this.autoresList.push({mail: autor, status: 'ok'})
      //   }
      // else{
      //   this.autoresList.push({mail: autor, status: 'not ok'})
      // }
      // })
      this.autoresList.push({mail: autor, status: 'ok'})
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
        return x
      }
      return null;
    });
    this.paper.autores = this.autoresList.map((x: any) => {
        return x.mail
    });
    // this.paperService.putPaper(this.paper).subscribe((res: any) => {
    //   this.paper = res.data;
    //   alert('Autor Eliminado')
    // })

  }

  save(): void {

  }

  submit(): void {
    this.submitted = true;
    if (this.formPaper.invalid) {
      alert('Por favor complete todos los datos.');
      return;
    }
    // this.paper = {
    // };

    this.paperEmitter.emit(this.paper);

  }

}
