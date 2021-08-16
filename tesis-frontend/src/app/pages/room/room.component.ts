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
              private route: ActivatedRoute,
              private router: Router) { }
  roomList = [];
  edit = false;
  room = {};
  id = '';

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.id = this.route.snapshot.paramMap.get('id');
    this.getRooms(this.id);
  }

  getRooms(id: string): void{
    this.roomService.getRooms(id).subscribe((res: any) => {
       this.roomList = res.data;
      });
  }

  newRoom(): void{
    this.edit = !this.edit;
    this.room = {};

  }

  deleteRoom(item: IRoom): void{
    this.roomService.deteleRoom(item).subscribe( (res: any) => {alert('El aula ha sido eliminada'); });
  }

  editRoom(room: IRoom): void {
    this.edit = !this.edit;
    this.room = room;

  }

  toggleCreateRoom(item: IRoom): void{
    if (item.id === undefined) {
      this.roomService.registerRoom(item).subscribe((res: any) => {
        alert('Aula Creada');
      });
    }
    else{
      this.roomService.putRoom(item).subscribe((res: any) => {
        alert('Aula Modificada');
      });
    }
    this.getRooms(this.id);
  }

  goBack(): void {
    this.router.navigate(['/misCongresos']);
  }
}
