import { NgModule, importProvidersFrom } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { Grade6Component } from './pages/grade6/grade6.component';
import { Grade7Component } from './pages/grade7/grade7.component';
import { Grade8Component } from './pages/grade8/grade8.component';
import { Grade9Component } from './pages/grade9/grade9.component';
import { Grade10Component } from './pages/grade10/grade10.component';
import { Grade11Component } from './pages/grade11/grade11.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact_us',component:ContactUsComponent},
  {path:'grade6',component:Grade6Component},
  {path:'grade7',component:Grade7Component},
  {path:'grade8',component:Grade8Component},
  {path:'grade9',component:Grade9Component},
  {path:'grade10',component:Grade10Component},
  {path:'grade11',component:Grade11Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
