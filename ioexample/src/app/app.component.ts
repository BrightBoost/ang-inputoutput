import { Component } from '@angular/core';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "ioexample";
  latestItems: string = "";
  receivedNewItem(e): void {
    this.latestItems = e;
  }
}
