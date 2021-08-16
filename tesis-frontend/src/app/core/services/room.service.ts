import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IRoom } from '../models/IRoom';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  /* Revisar */
  private apiURLRoom = environment.apiURL + 'aulas/';
  private apiURLRooms = environment.apiURL  + 'aulas/todos/';
  private apiURLRoomDelete = environment.apiURL + 'eliminarAula/';

  constructor(private httpClient: HttpClient) { }

  registerRoom(room: IRoom): any{
    return this.httpClient.post<IRoom>(this.apiURLRoom, {Room: room});
  }
  putRoom(room: IRoom): any{
    return this.httpClient.put<IRoom>(this.apiURLRoom, room);
  }

  getRooms(id: any): any{
    return this.httpClient.get(this.apiURLRooms + id);
  }

  deteleRoom(room: IRoom): any{
    return this.httpClient.delete<IRoom>(this.apiURLRoomDelete);
  }

}
