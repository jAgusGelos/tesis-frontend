import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InscriptionsService } from 'src/app/core/services/inscriptions.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css']
})
export class PaymentSuccessComponent implements OnInit {

  token = '';
  nombreCongreso = 'DEFAULTNAME';

  constructor(private route: ActivatedRoute,
              private inscriptionService: InscriptionsService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.token = params.token;
      this.inscriptionSuccess(this.token);
      this.getCongressName();

    });
  }

  inscriptionSuccess(token): void {
    this.inscriptionService.paymentSuccess(token).subscribe(
      (res: any) => {console.log(res.email); },
      (err: any) => {alert(err.error.error); }
    );
  }

  getCongressName(): void {
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.token);
    this.nombreCongreso = decodedToken.nombreCongreso;
  }
}
