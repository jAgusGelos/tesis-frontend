import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cancel-author',
  templateUrl: './cancel-author.component.html',
  styleUrls: ['./cancel-author.component.css']
})
export class CancelAuthorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
