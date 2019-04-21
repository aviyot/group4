import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BmiCalculatorService {

  constructor() { }

 public clacBmi(height: number, weight: number): number {


  return (((Number(height) * Number(height) )) / Number(weight));
   }


}
