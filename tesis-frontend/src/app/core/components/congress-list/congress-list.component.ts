import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ICongress } from '../../models/ICongress';

@Component({
  selector: 'app-congress-list',
  templateUrl: './congress-list.component.html',
  styleUrls: ['./congress-list.component.css']
})
export class CongressListComponent implements OnInit {

  @Input() congressList = [{nombre: 'Probando', sede: 'Tu casa', ano: '2021'}];
  @Output() editCongressEvent = new EventEmitter();
  @Output() newCongressEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleEdit(item: any): void {
    this.editCongressEvent.emit(item);
  }

  toggleNew(): void {
    this.newCongressEvent.emit();
  }

}
