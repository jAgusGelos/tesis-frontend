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

  postRoom(room: any): any{
    const postRoom = {
      nombre: room.nombre,
      descripcion: room.descripcion,
      capacidad: room.capacidad,
      sede: this.sede
    };
    return this.httpClient.post(this.apiURL + 'congresos/crear-aula/', postRoom);
  }
  putRoom(room: any): any{
    console.log(room);

    const postRoom = {
      id: room.id,
      nombre: room.nombre,
      descripcion: room.descripcion,
      capacidad: room.capacidad,
      sede: this.sede
    };
    return this.httpClient.put(this.apiURL + 'congresos/editar-aula/', postRoom);
  }

  getRooms(): any{
    return this.httpClient.get(this.apiURL + 'congresos/lista-aulas/?idSede=' + this.sede);
  }

  getRoomsId(idCongreso: any): any{
    return this.httpClient.get(this.apiURL + 'congresos/lista-aulas/?idCongreso=' + idCongreso);
  }

  deteleRoom(room: IRoom): any{
    // return this.httpClient.delete<IRoom>(this.apiURL);
    return this.httpClient.request('delete', this.apiURL + 'congresos/eliminar-aula/',
    {body: {id: room.id, sede: this.sede}});
  }

}
