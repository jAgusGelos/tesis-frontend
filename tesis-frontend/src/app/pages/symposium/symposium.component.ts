import { Component, OnInit } from '@angular/core';
import { ISymposium } from 'src/app/core/models/ISymposium';
import { SymposiumService } from 'src/app/core/services/symposium.service';

@Component({
  selector: 'app-symposium',
  templateUrl: './symposium.component.html',
  styleUrls: ['./symposium.component.css']
})
export class SymposiumComponent implements OnInit {

  symposiumList = [];
  edit = false;
  symposium = {};

  constructor(private symposiumService: SymposiumService) { }

  ngOnInit(): void {
    this.getSymposium();
  }
  getSymposium(): void {
    this.symposiumService.getSymposium().subscribe((res: any) => {
      this.symposiumList = res.data;
    });
  }

  newSymposium(): void {
    this.edit = !this.edit;
    this.symposium = {};
  }

  editSymposium(symposium: ISymposium): void {
    this.edit = !this.edit;
    this.symposium = symposium;

  }

  deleteSymposium(item: ISymposium): void {
    this.symposiumService.deleteSymposium(item).subscribe((res: any) => {
      alert('El Simposio ha sido eliminado correctamente');
    });
  }

}
