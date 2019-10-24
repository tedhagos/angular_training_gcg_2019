import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { MessagesComponent } from './messages/messages.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  {path: 'department', component: DepartmentComponent},
  {path: 'messages', component: MessagesComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: '**', component: PagenotfoundComponent},
];

@NgModule({
  /*
  if useHash is false, your app will use HTML5 style routing; which
  means, you need to configure URL rewriting on the server side.
  If you don't want to configure URL rewriting on the server side,
  use the old style of client side routing, by setting useHash 
  to true
  */
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
