import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() fullList: any[];
  @Input() attribFilter: string;
  @Output() listEvent = new EventEmitter<any[]>();
  formInput: FormGroup;

  constructor(private formGroup: FormBuilder) { }

  ngOnInit(): void {
    this.formInput = this.formGroup.group({
      search: ['', []]
    });
  }


  searchTitle(): void {
    let list = [];
    if (this.formInput.controls.search.value.toLocaleLowerCase().trim() === '') {
      list = this.fullList.slice();
    } else {
      list = this.fullList.filter((item: any) => {
        if (item[this.attribFilter].toLocaleLowerCase().includes(this.formInput.controls.search.value.toLocaleLowerCase())) {
          return item;
        }
        return;
      });
    }
    this.listEvent.emit(list);
  }

}
