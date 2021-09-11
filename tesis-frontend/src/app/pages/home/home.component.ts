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

   constructor(private congressService:CongressService) { }

  ngOnInit(): void {
    this.getCongressData();
  }

  congressList = [];

    getCongressData(): void {
      this.congressService.getCongressPublic().subscribe((res: any) => {
        this.congressList = res.data;
        console.log(res);
        this.congressList = this.congressList.map((x: any) => {
          return {
            id: x.id,
            nombre: x.nombre,
            sede: x.sede,
            ano: x.año,
            fechaFinInsTemprana: x.fechaFinInsTemprana,
            fechaFinInsTardia: x.fechaFinInsTardia,
            nombre_sede: x.nombre_sede,
          };
        });
      });
    }
}

