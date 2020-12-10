import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'about', component: AboutComponent
//    ,
//   children: 
//   [{path: ':name',component: AboutComponent}
// ]

  },
  {
    path: 'contactus', component: ContactusComponent
    // ,
    // children: [
    //   { path: ':email', component: ContactusComponent },
    //   { path: ':name', component: ContactusComponent }
    // ]
  },
  { path: 'contactus/:email/:name', component: ContactusComponent},
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
