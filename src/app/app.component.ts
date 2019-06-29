import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bwm-cli';

  componentTitle = "I ama a variable from the ts file";

  clickHandler() {
    alert("I am clicked!");
  }
}
