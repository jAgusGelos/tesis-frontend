import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AssistantService } from 'src/app/core/services/assistant.service';

@Component({
  selector: 'app-accept-assistant',
  templateUrl: './accept-assistant.component.html',
  styleUrls: ['./accept-assistant.component.css']
})
export class AcceptAssistantComponent implements OnInit {

  accepted = false;
  token: string;

  constructor(private route: ActivatedRoute,
              private assistantAervice: AssistantService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.token = params.token;
      this.assistantAervice.acceptAssistant('?token=' + this.token).subscribe(
        (res: any) => this.accepted = true,
        (err: any) => {this.toastr.error('No se pudo confirmar su rol como ayudante.'); }
      );
    });
  }
}
