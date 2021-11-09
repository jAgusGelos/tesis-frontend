import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-payment-pending',
  templateUrl: './payment-pending.component.html',
  styleUrls: ['./payment-pending.component.css']
})
export class PaymentPendingComponent implements OnInit {

  token = '';
  nombreCongreso = 'DEFAULTNAME';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.token = this.route.snapshot.params.token;
    this.getCongressName();
  }

  getCongressName(): void {
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.token);
    this.nombreCongreso = decodedToken.nombreCongreso;
  }
}
