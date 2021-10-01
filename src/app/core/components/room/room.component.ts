import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { IRoom } from '../../models/IRoom';
import { AuthService } from '../../services/auth.service';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  @Input() roomList: any[];
  @Output() editRoomEvent = new EventEmitter();
  @Output() newRoomEvent = new EventEmitter();
  @Output() deleteRoomEvent = new EventEmitter();
  @Output() goBackEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  toggleEdit(room: any): void {
    this.editRoomEvent.emit(room);
  }

  toggleNew(): void {
    this.newRoomEvent.emit();
  }
  toggleRemoveHandled(item: any): void {
    if (confirm('Está seguro desea eliminar el aula ' + item.nombre)) {
      this.deleteRoomEvent.emit(item);
    }
  }

  toggleBack(): void  {
    this.goBackEvent.emit();
  }

}
