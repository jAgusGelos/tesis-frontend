import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
              private service:UserService) { }

  ngOnInit(): void {
    this.token = this.route.snapshot.params.token;
    console.log(this.token);
    this.service.acceptEvaluatePaper('?token=' + this.token).subscribe(
      (res:any) => this.accepted=true,
      (err:any) => {alert('No se pudo aceptar la evaluación del paper.')}
    )
  }

}
