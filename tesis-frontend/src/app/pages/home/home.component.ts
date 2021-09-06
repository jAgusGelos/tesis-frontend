import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { ICongress } from 'src/app/core/models/ICongress';
import { ISchedule } from 'src/app/core/models/ISchedule';
import { CongressService } from 'src/app/core/services/congress.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   constructor(private authService: AuthService,
               private congressService:CongressService) { }

  ngOnInit(): void {
    this.getCongress();
    /* this.getSedes() */;
  }

  congresos: ICongress[];
  agendas: ISchedule[];
  sedes=[];
  
  getCongress(): void {
    this.congressService.getCongress().subscribe((res: any) => {
        this.congresos = res.data;
        this.congresos = this.congresos.map((x: any) => {
          return {
            id: x.id,
            sede: x.sede,
            nombre_sede: x.nombre_sede,
            ano: x.año,
            nombre: x.nombre,
            chairPrincipal: x.chairPrincipal,
            coordLocal: x.coordLocal
          };
        });
      });
     }

  getSedes(): void {
    this.congressService.getSedes().subscribe((res: any) => {
        this.sedes = res;
      });
    }

}
