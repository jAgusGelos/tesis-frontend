import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CustomToastComponent } from 'src/app/core/components/custom-toast/custom-toast.component';
import { IEvaluator } from 'src/app/core/models/iEvaluator';
import { EvaluatorService } from 'src/app/core/services/evaluator.service';

@Component({
  selector: 'app-evaluator',
  templateUrl: './evaluator.component.html',
  styleUrls: ['./evaluator.component.css'],
})
export class EvaluatorComponent implements OnInit {
  evaluatorList = [];
  evaluatorSelectedList =  [];
  adding = false;
  formEvaluator: FormGroup;
  evaluatorSelectedId = [];
  notLoaded = true;
  showListSelected = [];
  showListNotSelected = [];

  constructor(
    private evaluatorService: EvaluatorService,
    private toastr: ToastrService,

  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getEvaluatorSelected();
    this.getEvaluators();
  }

  /**
   * Carga los evaluadores no seleccionados
   */
  getEvaluators(): void {
    this.evaluatorService.getEvaluatorsSimposio().subscribe((res: any) => {
      if (res.data.length === 0) {
        this.toastr.info('Lo sentimos, actualmente no disponemos de más evaluadores.');
        return;
      }
      this.evaluatorList = res.data.filter((x: any) => {
        if (!this.evaluatorSelectedId.includes(x.idEvaluador)) {
          return x;
        }
      });
      this.showListNotSelected = this.evaluatorList.slice();
    });
  }

  /**
   * Carga los evaluadores ya seleccionados
   */
  getEvaluatorSelected(): void {
    this.evaluatorService.getEvaluatorsGroup().subscribe((res: any) => {
      this.evaluatorSelectedList = res.data;
      this.evaluatorSelectedId = res.data.map((x: any) => x.idEvaluador);
      this.showListSelected = res.data;
    });

  }

  /**
   *
   * @param item Evaluador
   * Selecciona un nuevo evaluador
   */
  addEvaluator(item: any): void {
    this.evaluatorService.postEvaluatorGroup(item.idEvaluador).subscribe((res: any) => {
      this.evaluatorList = this.evaluatorList.filter((x: any) => {
        if (!(x.idEvaluador === item.idEvaluador)) {
          return x;
        }
      });
      this.showListNotSelected = this.evaluatorList.slice();
      this.evaluatorSelectedList.push(item);
      this.showListSelected.push(item);
    });
  }

  /**
   * Carga todos los evaluadores
   */
  loadAll(): void {
    this.toastr
      .show( 'Atención, los evaluadores que está por cagar no pertenecen a su simposio. ¿Desea hacerlo de todas formas?', '¿Agregar más evaluadores?', {
        toastComponent: CustomToastComponent,
        disableTimeOut: true,
        tapToDismiss: false,
        enableHtml: true
      })
      .onAction.subscribe(() => {
        // Aca se hace el camino feliz
        this.evaluatorService.getEvaluatorsAll().subscribe((res: any) => {
          this.evaluatorList = res.data.filter((x: any) => {
            if (!this.evaluatorSelectedId.includes(x.idEvaluador)) {
              return x;
            }
          });

        });
        this.showListNotSelected = this.evaluatorList.slice();
      });
  }

  toggleRemoveHandled(item: any): void {
    this.toastr
      .show( 'Está seguro que desea eliminar el evaluador ' + 
      item.nombreEv + ' ' + item.apellidoEv + '? '+ '\nToda la configuración creada se perderá', '¿Eliminar Evaluador?', {
        toastComponent: CustomToastComponent,
        disableTimeOut: true,
        tapToDismiss: false,
        enableHtml: true
      })
      .onAction.subscribe(() => {
        // Aca se hace el camino feliz
        this.evaluatorService.deleteEvaluatorGroup(item.idEvaluador).subscribe((res: any) => {
          this.evaluatorList.push(item);
          this.evaluatorSelectedList = this.evaluatorSelectedList.filter((x: any) => {
            if (x.idEvaluador !== item.idEvaluador) {
              return item;
            }
          });
           this.showListNotSelected.push(item);
         this.showListSelected = this.evaluatorSelectedList.slice();
          
      });
    });
  }

  searchSelected(filterList): void {
    this.showListSelected = filterList;
  }

  searchNotSelected(filterList): void {
    this.showListNotSelected = filterList;
  }

}
