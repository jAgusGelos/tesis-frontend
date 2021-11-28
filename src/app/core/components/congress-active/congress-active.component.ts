import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-congress-active',
  templateUrl: './congress-active.component.html',
  styleUrls: ['./congress-active.component.css']
})
export class CongressActiveComponent implements OnInit {

  @Input() congressList;
  @Output() editDatesEvent = new EventEmitter();
  @Output() editSympoEvent = new EventEmitter();
  @Output() editRoomsEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  toggleEditDate(item: any): void {
    this.editDatesEvent.emit(item);
  }

  toggleEditSympo(item: any): void {
    this.editSympoEvent.emit(item);
  }

  toggleEditRooms(item: any): void {
    this.editRoomsEvent.emit(item);
  }

}
