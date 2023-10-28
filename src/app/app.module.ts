import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { SharePageComponent } from './share-page/share-page.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { NavBarComponent } from './share-page/nav-bar/nav-bar.component';
import { FooterComponent } from './share-page/footer/footer.component';
import { Grade6Component } from './pages/grade6/grade6.component';
import { Grade7Component } from './pages/grade7/grade7.component';
import { Grade8Component } from './pages/grade8/grade8.component';
import { Grade9Component } from './pages/grade9/grade9.component';
import { Grade10Component } from './pages/grade10/grade10.component';
import { Grade11Component } from './pages/grade11/grade11.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    SharePageComponent,
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
    NavBarComponent,
    FooterComponent,
    Grade6Component,
    Grade7Component,
    Grade8Component,
    Grade9Component,
    Grade10Component,
    Grade11Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
