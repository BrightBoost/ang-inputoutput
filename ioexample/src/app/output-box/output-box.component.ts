import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-box',
  templateUrl: './output-box.component.html',
  styleUrls: ['./output-box.component.css']
})
export class OutputBoxComponent implements OnInit {
  @Input() latestItems = "";

  constructor() { }

  ngOnInit() {
  }

}
