import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-cancel-sec-chair',
  templateUrl: './cancel-sec-chair.component.html',
  styleUrls: ['./cancel-sec-chair.component.css']
})
export class CancelSecChairComponent implements OnInit {
  cancel: boolean = false;
  token : string;
  constructor(private  route:ActivatedRoute,
              private service: UserService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.token = this.route.snapshot.params.token;
    /* this.service.cancelChairSec('?token' + this.token).subscribe(
      (res:any) => this.cancel =  true,
      (err:any) => this.toastr.error('No se pudo cancelar su rol como Chair Secundario.')
    ) */
  }

}
