import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-restore-password',
  templateUrl: './restore-password.component.html',
  styleUrls: ['./restore-password.component.css']
})
export class RestorePasswordComponent implements OnInit {
  token:string;
  constructor(private route:ActivatedRoute,
              private service: UserService) { }

  ngOnInit(): void {
    const url = window.location.href;
    const url_array = url.split('/');
    this.token = url_array[url_array.length - 1];
      this.service.restorePassword('?token='+this.token).subscribe(
        (res: any)=>{console.log('OK')},
        (err:any) => {console.log(err.status)})
  }

}
