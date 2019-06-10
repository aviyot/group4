import { Injectable } from "@angular/core";
import { promise } from "protractor";

@Injectable({
  providedIn: "root"
})
export class BooksService {
  key = "AIzaSyDzca5CzrJVgZke0gK6jIeGTk_dSixYHkc";
  constructor() {}

  fetchBooks(serchTerm: string, startIndex: number) {
    return fetch(
      `https://www.googleapis.com/books/v1/volumes?key=AIzaSyBQx_8AIKCiQdYGcIR2cvlo3ljjOq5bDNc&q=${serchTerm}&startIndex=${startIndex}`
    )
      .then(response => response.json())
      .then(books => {
        return books;
      });
  }
}
