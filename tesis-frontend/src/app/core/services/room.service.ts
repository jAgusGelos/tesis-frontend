import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IRoom } from '../models/IRoom';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private apiURL = environment.apiURL;
  sede: number;
  constructor(private httpClient: HttpClient,
              private auth: AuthService) {
                this.sede = this.auth.getSedeId();
               }

  postRoom(room: IRoom): any{
    const postRoom = {
      nombre: room.name,
      descripcion: room.description,
      capacidad: room.capacity,
      sede: this.sede
    };
    return this.httpClient.post(this.apiURL + 'congresos/crear-aula/', postRoom);
  }
  putRoom(room: IRoom): any{
    const postRoom = {
      id: room.id,
      nombre: room.name,
      descripcion: room.description,
      capacidad: room.capacity,
      sede: this.sede
    };
    return this.httpClient.put(this.apiURL + 'congresos/editar-aula/', postRoom);
  }

  getRooms(id: any): any{
    return this.httpClient.get(this.apiURL + 'congresos/lista-aulas/');
  }

  deteleRoom(room: IRoom): any{
    // return this.httpClient.delete<IRoom>(this.apiURL);
    return this.httpClient.request('delete', this.apiURL + 'congresos/eliminar-aula/',
    {body: {id: room.id, sede: this.sede}});
  }

}
