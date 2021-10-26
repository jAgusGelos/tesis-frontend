import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-accept-evaluator',
  templateUrl: './accept-evaluator.component.html',
  styleUrls: ['./accept-evaluator.component.css']
})
export class AcceptEvaluatorComponent implements OnInit {
  accepted = false;
  token: string;
  constructor(private route: ActivatedRoute,
              private service: UserService,
              private toastr: ToastrService,
              ) { }

  ngOnInit(): void {
    this.token = this.route.snapshot.params.token;
    this.service.acceptEvaluator('?token=' + this.token).subscribe(
      (res: any) => this.accepted = true,
      (err: any) => {this.toastr.error('No se pudo confirmar su rol como evaluador.');}
    );
  }

}
