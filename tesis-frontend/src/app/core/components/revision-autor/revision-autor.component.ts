import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-revision-autor',
  templateUrl: './revision-autor.component.html',
  styleUrls: ['./revision-autor.component.css']
})
export class RevisionAutorComponent implements OnInit {

  @Input() paper: any;
  @Output() cancelRevision = new EventEmitter();


  constructor( ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    console.log(this.paper);
  }

  cancel(): void {
    this.cancelRevision.emit();
  }
}
