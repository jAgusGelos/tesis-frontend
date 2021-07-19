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
  autoresList = [{mail: 'autor1@gmail.com', status: 'ok'}, {mail: 'autor1@gmail.com', status: 'not ok'}];


  constructor(private formBuilder: FormBuilder,
              private paperService: PaperService) { }

  ngOnInit(): void {
    this.formPaper = this.formBuilder.group({
      nombre: [this.paper.nombre, [Validators.required]],
      simposio: [this.paper.simposio, [Validators.required]],
      archivo: [this.paper.archivo, [Validators.required]]
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
