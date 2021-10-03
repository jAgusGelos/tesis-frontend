import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CongressRoutingModule } from 'src/app/pages/congress/congress-routing.module';

@Component({
  selector: 'app-evaluate-paper-form',
  templateUrl: './evaluate-paper-form.component.html',
  styleUrls: ['./evaluate-paper-form.component.css']
})
export class EvaluatePaperFormComponent implements OnInit {

  @Input() paper: any;
  @Input() items = [];
  @Input() evaluation: any;
  @Output() postEvaluation = new EventEmitter();
  @Output() GetItemsEvent = new EventEmitter();
  @Output() GetFileEvent = new EventEmitter();
  @Output() CancelEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getItems(this.paper.idArticulo);
    this.setReco();
  }

  submit() {
    let reco = this.getReco();
    let obs = <HTMLTextAreaElement>document.getElementById("observaciones");
    let text = obs.value.length;
    if (text == 0 || reco == 0) {
      alert('Porfavor, elija una recomendación y escriba una observación para terminar la evaluación.')
      return;
    }
    let itemValues = [];
    for (let i = 0; i < this.items.length; i++) {
      let it = <HTMLInputElement>document.getElementById((i+1).toString());
      itemValues.push(it.value);
    }

    let cadena = '';
    let itemValuesAux = [];
    for (let i = 0; i < itemValues.length; i++) {
      if (i == itemValues.length-1) {
        cadena = cadena + this.items[i].idItemEvaluacion + '-' + itemValues[i]
        break;
      }
      cadena = cadena + this.items[i].idItemEvaluacion + '-' + itemValues[i] + ',';
    }
    itemValuesAux = [cadena];
    const evaluation = {
      idArticulo: this.paper.idArticulo,
      idRecomendacion: reco,
      observacion: obs.value,
      itemsEvaluacion: itemValuesAux
    };
    this.postEvaluation.emit(evaluation);
  }

  getReco() {
    let radbtn;
    let recomendaciones = ['fuertementeRechazar', 'rechazar', 'debilmenteRechazar', 'debilmenteAprobar', 'aprobar', 'fuertementeAprobar', 'necesitaReentrega']
    for (let i = 0; i < recomendaciones.length; i++) {
      radbtn = <HTMLInputElement>document.getElementById(recomendaciones[i]);
      if (radbtn.checked == true) {
        return parseInt(radbtn.value);
      }
    }
    return 0;
  }

  setReco() {
    let radbtn;
    if (this.paper.recomendacion == 1) {
      radbtn = <HTMLInputElement>document.getElementById("fuertementeRechazar")
      radbtn.checked = true;
    } else if (this.paper.recomendacion == 2) {
      radbtn = <HTMLInputElement>document.getElementById("rechazar")
      radbtn.checked = true;
    } else if (this.paper.recomendacion == 3) {
      radbtn = <HTMLInputElement>document.getElementById("debilmenteRechazar")
      radbtn.checked = true;
    } else if (this.paper.recomendacion == 4) {
      radbtn = <HTMLInputElement>document.getElementById("debilmenteAprobar")
      radbtn.checked = true;
    } else if (this.paper.recomendacion == 5) {
      radbtn = <HTMLInputElement>document.getElementById("aprobar")
      radbtn.checked = true;
    } else if (this.paper.recomendacion == 6) {
      radbtn = <HTMLInputElement>document.getElementById("fuertementeAprobar")
      radbtn.checked = true;
    } else if (this.paper.recomendacion == 7) {
      radbtn = <HTMLInputElement>document.getElementById("necesitaReentrega")
      radbtn.checked = true;
    }
  }

  cancel() {
    this.CancelEvent.emit();
  }

  getItems(id) {
    this.GetItemsEvent.emit(id);
  };

  getFile(id) {
    this.GetFileEvent.emit(id);
  }
}
