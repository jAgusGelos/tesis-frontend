import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ISymposium } from '../../models/ISymposium';

@Component({
  selector: 'app-symposium-select',
  templateUrl: './symposium-select.component.html',
  styleUrls: ['./symposium-select.component.css']
})
export class SymposiumSelectComponent implements OnInit {

  @Input() simposios: ISymposium[];
  @Output() cancelSymposium = new EventEmitter();
  @Output() symposiumEmitter = new EventEmitter();
  formSymposium: FormGroup;
  submitted = false;
  @Input() simposiosList: ISymposium[];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formSymposium = this.formBuilder.group({
      nombre: ['']
    });

  }

  onChange(item: any): void {
    const [id, nombre, desc] = item.split('/');
    if (!id){
      return;
    }
    const exist = this.simposiosList.some((x: any) => {
      if (x.id === id) {
        return true;
      }
    });
    if (exist) {
      alert('Ya existe el simposio ingresado');
      return;
    }
    this.simposiosList.push({id, nombre, descripcion: desc});
  }

  cancel(): void {
    this.cancelSymposium.emit();
  }

  delSimposio(item: any): void {
    this.simposiosList = this.simposiosList.filter((x: any) => {
      if (x.id !== item.id){
        return x;
      }
      return null;
    });
  }

  submit(): void {
    this.symposiumEmitter.emit(this.simposiosList);
  }

}
