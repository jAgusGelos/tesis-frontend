import { Component, OnInit } from '@angular/core';
import { ICongress } from 'src/app/core/models/ICongress';
import { CongressService } from 'src/app/core/services/congress.service';

@Component({
  selector: 'app-congress',
  templateUrl: './congress.component.html',
  styleUrls: ['./congress.component.css']
})
export class CongressComponent implements OnInit {

  congressList = [];
  edit = false;
  congress = {};

  constructor(private congressService: CongressService) { }

  ngOnInit(): void {
    this.congressService.getCongress().subscribe((res: any) => {
      this.congressList = res.data;
    });
  }

  newCongress(): void {
    this.edit = !this.edit;
  }

  editCongress(congress: ICongress): void {
    this.edit = !this.edit;
    this.congress = congress;

  }


  /**
   *
   * @param item
   * Recibe un congreso, chequea que tenga un id.
   * Si lo tiene hace un PUT al back. Actualiza un congreso creado.
   * Si no lo tiene crea un nuevo congreso.
   */
  toggleCongress(item: ICongress): void {
    if (item.id === '') {
      this.congressService.postCongress(item).subscribe((res: any) => {
        alert('Congreso Creado Correctamente');
      });
    }
    else{
      this.congressService.putCongress(item).subscribe((res: any) => {
        alert('Congreso Modificado Correctamente');
      })
    }
  }

}
