import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-cancel-evaluate-paper',
  templateUrl: './cancel-evaluate-paper.component.html',
  styleUrls: ['./cancel-evaluate-paper.component.css']
})
export class CancelEvaluatePaperComponent implements OnInit {
  cancel: boolean = false;
  token: string;
  constructor(private route: ActivatedRoute,
    private service: UserService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    const url = window.location.href;
    const url_array = url.split('/');
    this.token = url_array[url_array.length - 1];
    this.service.cancelEvaluatePaper('?token=' + this.token).subscribe(
      (res: any) => this.cancel = true,
      (err: any) => { this.toastr.error('No se pudo cancelar su asignación como evaluador del paper.') }
    )

  }

}
