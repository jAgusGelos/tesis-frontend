import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-accept-evaluate-paper',
  templateUrl: './accept-evaluate-paper.component.html',
  styleUrls: ['./accept-evaluate-paper.component.css']
})
export class AcceptEvaluatePaperComponent implements OnInit {
  token: string;
  accepted: boolean = false;
  constructor(private route: ActivatedRoute,
              private service:UserService,
              private toastr: ToastrService,
              ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.token = params.token;
      this.service.acceptEvaluatePaper('?token=' + this.token).subscribe(
        (res:any) => this.accept(),
        (err:any) => {this.toastr.error('No se pudo aceptar la evaluación del paper.')}
      )
    });
  }

  accept():void{
    this.accepted= true;
    console.log('SI')
  }

}
