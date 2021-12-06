import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-ok-inscription',
  templateUrl: './ok-inscription.component.html',
  styleUrls: ['./ok-inscription.component.css']
})
export class OkInscriptionComponent implements OnInit {

  accepted = false;
  rejected = false;
  token: string;
  constructor(private route: ActivatedRoute,
              private service: UserService,
              private toastr: ToastrService,
              ) { }

  ngOnInit(): void {
    this.token = this.route.snapshot.params.token;
    this.service.acceptInscription(this.token).subscribe(
      (res: any) => this.accepted = true,
      (err: any) => {
        this.rejected = true;
        this.toastr.error('No se pudo confirmar la veracidad de la entrada.');
      }
    );
  }

}
