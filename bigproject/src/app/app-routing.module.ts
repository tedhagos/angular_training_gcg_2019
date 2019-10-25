import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooklistComponent } from './booklist/booklist.component';
import { BookdetailComponent } from './bookdetail/bookdetail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  {path: 'booklist', component: BooklistComponent},
  {path: 'bookdetail/:id', component: BookdetailComponent},
  {path: '', redirectTo: 'booklist', pathMatch: "full"},
  {path: "**", component: PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
