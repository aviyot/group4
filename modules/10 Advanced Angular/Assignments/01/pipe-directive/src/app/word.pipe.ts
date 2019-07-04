import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "word"
})
export class WordPipe implements PipeTransform {
  months: string[] = ["January", " February", "March", "April"];

  transform(value: number, args?: any): any {
    if (value < this.months.length) return this.months[value];
    else return value;
  }
}
