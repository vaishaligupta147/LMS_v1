import { Logger } from './../service/logger';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { RegisterService } from '../service/register.service';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  name: string;
  emailid: string;
  password: string;
  message:string;
  subject:string;
  formdata: FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      name: new FormControl(this.name),
      emailid: new FormControl(this.emailid),
      password: new FormControl(this.password),
      subject: new FormControl(this.subject),
      message: new FormControl(this.message)
   });
   
    console.log(this.activatedRoute.snapshot.params["email"]);
    console.log(this.activatedRoute.snapshot.params["name"]);
    console.log(this.activatedRoute.snapshot.queryParams);

    this.activatedRoute.params.subscribe(
      (params: Params) => {
        console.log(params.email);
        console.log(params.name);
      }
    )
    this.activatedRoute.queryParams.subscribe(
      (params: Params) => {
        console.log(params.city)
      }
    )
    this.activatedRoute.fragment.subscribe(
      (fragValue) => {
        console.log(fragValue)
      }
    )
  }

  onDiffContClick() {
    this.router.navigate(['/contactus', 'vaishali', 'guptavaishali@gmail.com'], { queryParams: { city: 'sagar' }, fragment: 'M.P.' });
  }
  
 
  
 
  

}
