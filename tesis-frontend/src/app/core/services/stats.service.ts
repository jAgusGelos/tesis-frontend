import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  private apiURL = environment.apiURL;
  idCongress: number;

  constructor(private httpClient: HttpClient,
              private auth: AuthService) {
    this.idCongress = this.auth.getCongressId();
  }

  getTopEval(): any {
    return this.httpClient.get(this.apiURL + 'estadisticas/devolverTopEvaluadores/?cantidad=10');
  }

  getTopSimposioXCongreso(): any {
    return this.httpClient.get(this.apiURL + 'estadisticas/devolverTopSimposiosXCongreso/?cantidad=10');
  }

  getTopSimpoGeneral(): any {
    return this.httpClient.get(this.apiURL + 'estadisticas/devolverTopSimposiosGeneral/?cantidad=10');
  }
  getTopSimpoXEval(): any {
    return this.httpClient.get(this.apiURL + 'estadisticas/devolverTopSimposiosXEvaluadores/?cantidad=10');
  }
  getEdadesXCongress(): any {
    return this.httpClient.get(this.apiURL + 'estadisticas/devolverEdadesXCongreso/?idCongreso=' + this.idCongress);
  }
  getPartXSede(): any {
    return this.httpClient.get(this.apiURL + 'estadisticas/devolverParticipantesXSede/?idCongreso=' + this.idCongress);
  }
  getEvalXCancelXCongreso(): any {
    return this.httpClient.get(this.apiURL + 'estadisticas/devolverEvaluadoresCancelacionesCongreso/?idCongreso=' + this.idCongress);
  }
  getEvalXCancel(): any {
    return this.httpClient.get(this.apiURL + 'estadisticas/devolverEvaluadoresCancelacionesGeneral/?cantidad=10');
  }
  getEstadoArticulos(): any {
    return this.httpClient.get(this.apiURL + 'estadisticas/devolverEstadosArticulos/?idCongreso=' + this.idCongress);
  }
  getTopEventos(): any {
    return this.httpClient.get(this.apiURL + 'estadisticas/devolverTopEventos/?idCongreso=' + this.idCongress + '&?cantidad=10');
  }
  getTopEvalCongress(): any {
    return this.httpClient.get(this.apiURL +
       'estadisticas/devolverTopEvaluadoresCongreso/?idCongreso=' + this.idCongress + '&?cantidad=10');
  }
  getSimpoXCalif(): any {
    return this.httpClient.get(this.apiURL + 'estadisticas/devolverSimposiosCalificaciones/?idCongreso=' + this.idCongress);
  }
  getRepEval(): any {
    return this.httpClient.get(this.apiURL + 'estadisticas/devolverReporteEvaluadores/?idCongreso=' + this.idCongress);
  }
  getRepExpos(): any {
    return this.httpClient.get(this.apiURL + 'estadisticas/devolverReporteExpositores/?idCongreso=' + this.idCongress);
  }
  getRepArtic(): any {
    return this.httpClient.get(this.apiURL + 'estadisticas/devolverReporteArticulos/?idCongreso=' + this.idCongress);
  }
  getRepAsist(): any {
    return this.httpClient.get(this.apiURL + 'estadisticas/devolverReporteAsistentes/?idCongreso=' + this.idCongress);
  }
  getRepEvent(): any {
    return this.httpClient.get(this.apiURL + 'estadisticas/devolverReporteEventos/?idCongreso=' + this.idCongress);
  }
}
