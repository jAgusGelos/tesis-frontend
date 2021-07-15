import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { IRoom } from '../../models/iroom';
import { AuthService } from '../../services/auth.service';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  @Input() roomList : IRoom[] = [
    {id:'as', name: 'A',  description: '-', capacity: 250},
    {id:'bs', name: 'B',  description: '-', capacity: 200},
    {id:'cs', name: 'C',  description: '-', capacity: 150},
  ];
  @Output() editRoomEvent = new EventEmitter();
  @Output() newRoomEvent = new EventEmitter();
  @Output() deleteRoomEvent = new EventEmitter();
  

  constructor() { }
                
  ngOnInit(): void {
    
  }

  toggleEdit(room: any): void {
    this.editRoomEvent.emit(room);
  }

  toggleNew(): void {
    this.newRoomEvent.emit();
  }
  toggleRemoveHandled(item: any): void {
    if (confirm('Está seguro desea eliminar el aula ' + item.name)) {
      this.deleteRoomEvent.emit(item);
    }
  }
  
}
