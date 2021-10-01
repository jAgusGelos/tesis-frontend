import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  reg = false;
  user = false;

  ngOnInit(): void {
    window.scrollTo(0, 0);
    const idToken = localStorage.getItem('id_token');
    if (idToken){
      this.user = true;
    }
  }


  register(): void {
    this.reg = !this.reg;
  }

}
