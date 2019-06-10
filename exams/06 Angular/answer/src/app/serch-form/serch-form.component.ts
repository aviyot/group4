import { Component, OnInit } from "@angular/core";
import { BooksService } from "../books.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-serch-form",
  templateUrl: "./serch-form.component.html",
  styleUrls: ["./serch-form.component.css"]
})
export class SerchFormComponent implements OnInit {
  serch: string;
  books = [];
  index = 0;
  totalItems = 0;
  newSerch = true;
  constructor(private booksService: BooksService) {}

  ngOnInit() {}

  loadMore(serchForm: NgForm){
  this.getBooks(serchForm);
  this.index++;
  }

  getBooks(serchForm: NgForm) {
    this.booksService.fetchBooks(this.serch, this.index).then(books => {
      console.log(books.items);
      this.totalItems = books.totalItems;
      this.newSerch = false;
      books.items.forEach(book => {
      /*   this.books.push({title:book.volumeInfo.title,
                            authors:book.volumeInfo.authors,
                            previewLink:book.volumeInfo.previewLink}); */
                            this.books.push(book);
     });
    });
  }
  onSubmit(serchForm: NgForm) {
    this.index = 0;
    this.books = [];
    if(serchForm.valid) {
      this.getBooks(serchForm);
    }
    this.index++;
  }
}
