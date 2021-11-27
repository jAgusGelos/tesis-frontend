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

  constructor(private congressService: CongressService) { }
  congressList = [];

  ngOnInit(): void {
    this.getCongressData();
  }


    getCongressData(): void {
      this.congressService.getCongress().subscribe((res: any) => {
        this.congressList = res.data;
        this.congressList = this.congressList.map((x: any) => {
          return {
            id: x.id,
            nombre: x.nombre,
            sede: x.sede,
            ano: x.año,
            fechaFinInsTemprana: x.fechaFinInsTemprana,
            fechaFinInsTardia: x.fechaFinInsTardia,
            fechaInicioExposiciones: x.fechaInicioExposiciones,
            fechaFinExposiciones: x.fechaFinExposiciones,
            nombre_sede: x.nombre_sede,
          };
        });
      });
    };

  verInfoPublica(congress): void {
    const url = '/informacionCongreso/' + congress.id;
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

