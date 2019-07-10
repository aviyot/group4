import { Component, OnInit } from "@angular/core";
import { fromEvent } from "rxjs";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.css"]
})
export class FilterComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const clicks = fromEvent(document, "click");
    const clicksOnDivs = clicks.pipe(filter(ev => ev.target.tagName === "DIV"));
    clicksOnDivs.subscribe(x => console.log(x));
  }
}
