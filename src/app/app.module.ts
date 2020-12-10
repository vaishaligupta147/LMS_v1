import { HomeComponent } from './home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { ReactiveFormsModule } from '@angular/forms';
//import { Routes, RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CountComponent } from './count/count.component';
import { CounterComponent } from './counter/counter.component';
import { ContainerComponent } from './container/container.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import {ColoringDirective} from './Directives/coloringDirective';
import { ColoringAltDirective } from './Directives/coloring-alt.directive';
import { Mypipe } from './Mypipe';

import { NavbarComponent } from './navbar/navbar.component';
import { PostService } from './services/post.service';
import { Logger } from './service/logger';
import { RegisterService } from './service/register.service';
import { CommonModule } from '@angular/common';

import { Ng2SearchPipeModule } from "ng2-search-filter";



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    CountComponent,
    CounterComponent,
    ContainerComponent,
    CartListComponent,
    AboutComponent,
    ServicesComponent,
    ColoringDirective,
    ColoringAltDirective,
    Mypipe,
   HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   HttpClientModule,
    ReactiveFormsModule,
   FormsModule,
      CommonModule,
      Ng2SearchPipeModule
    
  
  ],
  providers: [Logger,RegisterService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
