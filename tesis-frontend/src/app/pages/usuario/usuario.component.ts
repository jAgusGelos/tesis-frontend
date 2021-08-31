import { Component, OnInit } from '@angular/core';
import { IUserComplete } from 'src/app/core/models/IUserComplete';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private userService: UserService) { }

  usuario: IUserComplete;

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.userService.getLoggedUser().subscribe((res: any) => {
      this.usuario = res.data;
    });

  }

}
