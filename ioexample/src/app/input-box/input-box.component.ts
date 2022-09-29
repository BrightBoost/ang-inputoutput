import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css']
})
export class InputBoxComponent implements OnInit {
  item: string = '';
  name: string = '';
  @Output() newItemEvent = new EventEmitter<Array<string>>();


  constructor() { }

  ngOnInit() {
  }

  addItem() {
    let toBeEmitted = [this.item, this.name]
    console.log("Item was added: ", this.item);
    this.newItemEvent.emit(toBeEmitted);
    this.item = "";
    this.name = "";
  }

}
