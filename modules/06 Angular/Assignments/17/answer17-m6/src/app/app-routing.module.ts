import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent}  from './about-us/about-us.component'
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
 {path:'about-us', component:AboutUsComponent },
 {path :'all-recipes' , component:AllRecipesComponent},
 {path :'home', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
