import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISede } from 'src/app/core/models/ISede';
import { SedesService } from 'src/app/core/services/sedes.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-sedes',
  templateUrl: './sedes.component.html',
  styleUrls: ['./sedes.component.css']
})
export class SedesComponent implements OnInit {

  new = false;
  edit = false;
  loaded = false
  provincias = [];
  localidades = [];
  sedeList: ISede[] = [];
  sede: ISede;

  constructor(private sedeService: SedesService,
              private userService: UserService,
              private router: Router) {
                this.router.routeReuseStrategy.shouldReuseRoute = () => {
                  return false;
                };
              }

  ngOnInit(): void {
    this.getSedes();
    this.getProvincias();
  }

  getSedes(): void{
    this.sedeList = [];
    this.sedeService.getSedes().subscribe((res: any) => {
      this.sedeList = res.data;
      this.loaded = true;
    });
  }

  postSede(item): void {
    this.sedeService.postSede(item).subscribe((res: any) => {
      this.toggleEdit();
      this.router.navigateByUrl('/sedes');
    },
    (err: any) => console.log(err));
  }

  putSede(item): void {
    this.sedeService.putSede(item).subscribe((res: any) => {

      this.toggleEdit();
      this.router.navigateByUrl('/sedes');
    });
  }

  deleteSede(id): void {
    this.sedeService.deleteSede(id).subscribe((res: any) => {

      this.router.navigateByUrl('/sedes');
    });
  }

  getLocalidadesXProvincia(idProvincia: number): void {
    this.userService.getLocalidadesXProvincia(idProvincia).subscribe((res: any) => {
      this.localidades = res.data;
    });
  }

  getProvincias(): void {
    this.userService.getProvincias().subscribe((res: any) => {
      this.provincias = res.data;
    });
  }

  newSede(): void {
    this.sede = {
      id: '0',
      nombre: '',
      idProvincia: 0,
      nombreProvincia: '',
      idLocalidad: 0,
      nombreLocalidad: '',
      direccion: '',
      numero: 0
    };
    this.new = true;
    this.toggleEdit();
  }

  editSede(item: ISede): void {
    this.localidades = [];
    this.sede = item;
    this.new = false;
    this.toggleEdit();
  }

  toggleEdit(): void {
    this.edit = !this.edit;
  }
}
