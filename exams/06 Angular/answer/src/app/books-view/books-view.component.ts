import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-books-view",
  templateUrl: "./books-view.component.html",
  styleUrls: ["./books-view.component.css"]
})
export class BooksViewComponent implements OnInit {
  @Input() books;
  showDetails = false;
  selectedIndex = -1;
  constructor() {}
  toogleDetails(selectedIndex){
    this.showDetails = !this.showDetails;
    this.selectedIndex = selectedIndex;
  }
  ngOnInit() {}
}
