import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TriviaComponent } from "./components/trivia/trivia.component";
import { MainComponent } from "./components/main/main.component";

const routes: Routes = [
  { path: "", component: MainComponent, pathMatch: "full" },
  { path: "/triva", component: TriviaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
