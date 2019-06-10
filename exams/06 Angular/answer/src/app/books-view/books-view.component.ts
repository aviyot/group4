import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-books-view",
  templateUrl: "./books-view.component.html",
  styleUrls: ["./books-view.component.css"]
})
export class BooksViewComponent implements OnInit {
  @Input() book;
  showDetails = false;
  constructor() {}
  toogleDetails(){
    this.showDetails = !this.showDetails;
  }
  ngOnInit() {}
}
