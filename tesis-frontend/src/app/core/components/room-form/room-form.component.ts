import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IRoom } from '../../models/iroom';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-room-form',
  templateUrl: './room-form.component.html',
  styleUrls: ['./room-form.component.css']
})
export class RoomFormComponent implements OnInit {
  @Input() room: IRoom = {
    id: '',
    name: '',
    description: '',
    capacity: null,
  };

  formRooms: FormGroup;
  formSede: FormGroup;
  submitted = false;

  @Output() roomEmitter = new EventEmitter<IRoom>();
  @Output() cancelRoom = new EventEmitter();

  constructor(private formBuilder: FormBuilder,
              private roomService: RoomService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.formSede = this.formBuilder.group({
      sede: ['', [Validators.required]]
    })
    this.formRooms = this.formBuilder.group({
      nameAula: [this.room.name, Validators.required],
      descAula: [this.room.description],
      capAula: [this.room.capacity]
    })
  }
  agregar(): void {
    this.submitted = true;
    if (this.formRooms.controls.nameAula.invalid) {
      alert('Por favor, agregue el nombre del aula.');
      return;
    }
    this.room = {
      id: Math.random().toString(),
      name: this.formRooms.controls.nameAula.value,
      description: this.formRooms.controls.descAula.value,
      capacity: this.formRooms.controls.capAula.value
    };
    this.roomEmitter.emit(this.room)
  }
  cancel():void{
    this.cancelRoom.emit();
  }

}
