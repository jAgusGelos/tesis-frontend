import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ISymposium } from '../../models/ISymposium';
import { SymposiumService } from '../../services/symposium.service';

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

  constructor(private formBuilder: FormBuilder,
              private sympoService: SymposiumService,
              private router: Router) {
                this.router.routeReuseStrategy.shouldReuseRoute = () => {
                  return false;
                }
                ; }

  ngOnInit(): void {
    window.scrollTo(0, 0);
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
      if (+x.id === +id) {
        return true;
      }
    });
    if (exist) {
      alert('Ya existe el simposio ingresado');
      return;
    }
    this.sympoService.postSymposiumCongress({id, nombre, descripcion: desc}).subscribe((res: any) => {
      if (res.error) {
        alert('Ha ocurrido un error');
        return;
      }
      this.simposiosList.push({id, nombre, descripcion: desc});
    });

  }

  cancel(): void {
    this.cancelSymposium.emit();
  }

  delSimposio(item: any): void {
    this.sympoService.deleteSymposiumCongress(item).subscribe((res: any) => {
      if (res.error) {
        alert('Ha ocurrido un error');
        return;
      }
      this.simposiosList = this.simposiosList.filter((x: any) => {
        if (x.id !== item.id){
          return x;
        }
        return null;
      });
    });

  }

  submit(): void {
    alert('Datos Guardados');
    this.router.navigateByUrl('/misCongresos');
  }

}
