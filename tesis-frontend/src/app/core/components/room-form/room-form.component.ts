import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IRoom } from '../../models/IRoom';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-room-form',
  templateUrl: './room-form.component.html',
  styleUrls: ['./room-form.component.css']
})
export class RoomFormComponent implements OnInit {
  @Input() room: any;
  formRooms: FormGroup;
  formSede: FormGroup;
  submitted = false;

  @Output() roomEmitter = new EventEmitter<IRoom>();
  @Output() cancelRoom = new EventEmitter();

  constructor(private formBuilder: FormBuilder,
              private toastr: ToastrService,
    ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.formRooms = this.formBuilder.group({
      nameAula: [this.room.nombre, Validators.required],
      descAula: [this.room.descripcion],
      capAula: [this.room.capacidad]
    });
  }
  agregar(): void {
    this.submitted = true;
    if (this.formRooms.controls.nameAula.invalid) {
      this.toastr.show('Por favor, agregue el nombre del aula.');
      return;
    }
    this.room = {
      id: this.room.id ||  null,
      nombre: this.formRooms.controls.nameAula.value,
      descripcion: this.formRooms.controls.descAula.value,
      capacidad: this.formRooms.controls.capAula.value
    };
    this.roomEmitter.emit(this.room);
  }
  cancel(): void {
    this.cancelRoom.emit();
  }

}
