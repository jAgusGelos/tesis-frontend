import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-payment-failure',
  templateUrl: './payment-failure.component.html',
  styleUrls: ['./payment-failure.component.css']
})
export class PaymentFailureComponent implements OnInit {

  token = '';
  nombreCongreso = 'DEFAULTNAME';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const url = window.location.href;
    const url_array = url.split('/');
    this.token = url_array[url_array.length - 1];
    this.getCongressName();

  }

  getCongressName(): void {
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.token);
    this.nombreCongreso = decodedToken.nombreCongreso;
  }
}
