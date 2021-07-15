import { Component, OnInit } from '@angular/core';
import { IRoom } from 'src/app/core/models/iroom';
import { RoomService } from 'src/app/core/services/room.service';

@Component({
  selector: 'app-room-page',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  constructor( private roomService: RoomService) { }
  roomList = [];
  edit = false;
  room = {};

  ngOnInit(): void {
    this.getRooms();
  }

  getRooms():void{
    this.roomService.getRooms().subscribe((res: any) => {
       this.roomList = res.data;
      });
  }

  newRoom():void{
    this.edit = !this.edit;
    this.room = {};
   
  }

  deleteRoom(item: IRoom): void{
    this.roomService.deteleRoom(item).subscribe( (res:any) => {alert('El aula ha sido eliminada');});
  }

  editRoom(room: IRoom): void {
    this.edit = !this.edit;
    this.room = room;

  }

  toggleCreateRoom(item: IRoom): void{
    if (item.name === undefined) {
      this.roomService.registerRoom(item).subscribe((res: any) => {
        alert('Aula Creada');
      });
    }
    else{
      this.roomService.putRoom(item).subscribe((res: any) => {
        alert('Aula Modificada');
      });
    }
    this.getRooms();
  }
}
