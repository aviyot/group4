import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-highscore",
  templateUrl: "./highscore.component.html",
  styleUrls: ["./highscore.component.css"]
})
export class HighscoreComponent implements OnInit {
  name_score = [{ name: "avi", score: "70" }, { name: "moshiko", score: "90" }];
  constructor() {}

  ngOnInit() {}
}
