import { Component } from '@angular/core';
import { BmiCalculatorService } from './bmi-calculator.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'answer19-m6';
  result = null;


  constructor( private bmi: BmiCalculatorService) {

  }

  myCalcBmi(height: number, weight: number) {

      this.result = this.bmi.clacBmi(height, weight);
  }

}
