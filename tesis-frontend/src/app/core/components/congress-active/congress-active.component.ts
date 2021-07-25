import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-congress-active',
  templateUrl: './congress-active.component.html',
  styleUrls: ['./congress-active.component.css']
})
export class CongressActiveComponent implements OnInit {

  @Input() congressList = [
    {id: '123', nombre: 'Probando', sede: 'Tu casa', ano: '2021'}];
  @Output() editDatesEvent = new EventEmitter();
  @Output() editSympoEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleEditDate(item: any): void {
    this.editDatesEvent.emit(item);
  }

  toggleEditSympo(item: any): void {
    this.editSympoEvent.emit(item);
  }

}
