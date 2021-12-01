import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CongressService } from 'src/app/core/services/congress.service';
import { EventosService } from 'src/app/core/services/eventos.service';

@Component({
  selector: 'app-proximo-evento',
  templateUrl: './proximo-evento.component.html',
  styleUrls: ['./proximo-evento.component.css']
})
export class ProximoEventoComponent implements OnInit {

  evento = {
    titulo: '',
    contenido: '',
    simposio: '',
    inicio: '',
    fin: ''
  };
  aula = '';
  congreso = '';

  constructor(private eventoService: EventosService,
              private route: ActivatedRoute,
              private congressService: CongressService,
              private toast: ToastrService) { }

  ngOnInit(): void {
    const idCongreso = this.route.snapshot.params.idCongreso;
    const idAula = this.route.snapshot.params.idAula;
    this.congressService.getCongressById(idCongreso).subscribe((res: any) => {
      const data = res.data[0];
      this.congreso = data.nombre;
    });
    this.eventoService.getProximosEventos(idCongreso, idAula).subscribe(
      (res: any) => {
        const datos = res.data;
        this.evento.titulo = datos.Titulo;
        this.evento.contenido = datos.Contenido;
        this.evento.simposio = datos.Simposio;
        this.evento.inicio = this.handleHorario(datos.Inicio);
        this.evento.fin = this.handleHorario(datos.Fin);
        this.aula = datos.Aula;
      },
      (err: any) => {
        this.toast.error(err.error);
      });
  }

  handleHorario(date: string): string {
    const fecha = date.split('T');
    const aux = fecha[1].split('Z');
    const hora = aux[0].split(':');
    const hrmin = hora[0] + ':' + hora[1] + ' hs';
    return hrmin;
  }
}
