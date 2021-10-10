import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-confirmed-account',
  templateUrl: './confirmed-account.component.html',
  styleUrls: ['./confirmed-account.component.css']
})
export class ConfirmedAccountComponent implements OnInit {
  token : string;
  confirmed: boolean = false;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private verifyEmailService:AuthService,
              private toastr: ToastrService,
              ) { }

  ngOnInit(): void {
    this.token = this.route.snapshot.params.token;
    console.log(this.token);
    this.verifyEmailService.verifyEmail('?token='+this.token).subscribe(
      (res:any) => {this.confirmed=true},
      (err:any) => {this.toastr.error("No se pudo confirmar la cuenta.")})
  }

}

