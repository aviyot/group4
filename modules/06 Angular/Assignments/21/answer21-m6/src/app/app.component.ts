import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'answer21-m6';
  timer = true;
  count = false;
   now;
  onTimerChecked() {
    setInterval( () => {
      this.now = new Date();
     }, 1000);
    this.timer = true;
    this.count = false;


  }
  onCountChecked() {
    this.timer = false;
    this.count = true;
  }
}
