import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IRoom } from 'src/app/core/models/IRoom';
import { RoomService } from 'src/app/core/services/room.service';

@Component({
  selector: 'app-room-page',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  constructor(private roomService: RoomService,
              private router: Router) { }
  roomList = [];
  edit = false;
  room = {};
  id = '';

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getRooms();
  }

  getRooms(): void{
    this.roomService.getRooms().subscribe((res: any) => {
       this.roomList = res.data[0];
      });
  }

  newRoom(): void{
    this.edit = !this.edit;
    this.room = {};

  }

  deleteRoom(item: IRoom): void{
    this.roomService.deteleRoom(item).subscribe((res: any) => {
      alert('El aula ha sido eliminada');
      window.location.reload();
    });
  }

  editRoom(room: any): void {
    this.edit = !this.edit;
    this.room = room;
  }

  toggleCreateRoom(item: IRoom): void{
    if (item.id === null) {
      this.roomService.postRoom(item).subscribe((res: any) => {
        alert('Aula Creada');
        window.location.reload();
      });
    }
    else{
      this.roomService.putRoom(item).subscribe((res: any) => {
        alert('Aula Modificada');
        window.location.reload();
      });
    }
    this.getRooms();
  }

  goBack(): void {
    this.router.navigate(['/misCongresos']);
  }
}
