import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICongress } from '../../models/ICongress';

@Component({
  selector: 'app-congress-active',
  templateUrl: './congress-active.component.html',
  styleUrls: ['./congress-active.component.css']
})
export class CongressActiveComponent implements OnInit {

  @Input() congressList: ICongress;
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
