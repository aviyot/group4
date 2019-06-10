import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SerchFormComponent } from './serch-form/serch-form.component';
import { BooksViewComponent } from './books-view/books-view.component';

@NgModule({
  declarations: [
    AppComponent,
    SerchFormComponent,
    BooksViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
