import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { country } from './country';
import { Logger } from '../service/logger';
import { RegisterService } from '../service/register.service';
import { role } from './role';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  //formdata: FormGroup;
  model: any = {};
  name: string;
  emailid: string;
  password: string;
  cpassword: string;
  country: string;
  role:string;
  user = [];
  bookId:number=0;
  //public dob: string;
  //public age: number;
  flag: boolean = false;
  isPageLoaded: boolean = false;
  formdata: any;
  alert:boolean = false;
  // countryList:country[] = [
  //   new country("1", "India"),
  //   new country('2', 'USA'),
  //   new country('3', 'England')
  // ];
  roleList:role[] = [
    new role("1", "Librarian"),
    new role('2', 'library member')
    
  ];

  constructor(private logger:Logger, private registerService:RegisterService, 
    private router: Router, private PostService:PostService) { }

  ngOnInit(): void {
    
    // setTimeout(() => {
    //   this.isPageLoaded = true;
    // }, 5000)
     this.alert=false;
       this.formdata = new FormGroup({
          emailid: new FormControl(this.emailid, Validators.required),
          password: new FormControl(this.password, Validators.required),
          cpassword: new FormControl(this.cpassword, Validators.required),
          bookId: new FormControl(this.bookId),
         // age: new FormControl(this.age, Validators.required),
         
        // country: new FormControl(this.country, Validators.required),
         role: new FormControl(this.role, Validators.required),
          name: new FormControl(this.name, [
            Validators.required,
            Validators.minLength(4),
        
          ])
    
       });
    
  }
    
  // public CalculateAge(): number {
  
  //   if (this.dob) {
  //     var timeDiff = Math.abs(Date.now() - new Date(this.dob).getTime());
  //     this.age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  //     console.log(this.age)
  //     return this.age;
  //   }
  // }

  onClickSubmit1(data) {
    
    this.name = data.name;
    this.emailid = data.emailid;
    this.password = data.password;
    this.cpassword = data.cpassword;

   this.bookId = data.bookId;
   // this.country=data.country;

    // this.registerService.getDetails(this.name,this.emailid,this.password);
     // this.logger.logMessage("name :",this.name);
    // this.logger.logMessage("email :",this.emailid);
    // this.logger.logMessage("Password :",this.password);

   // let totalAge = this.CalculateAge();
    //console.log("totalAge : " + totalAge);

   // data.dob = totalAge;

    this.user.push(data);
    console.log(this.user);
    console.log("name : "+this.name);
    console.log("bookId : " + this.bookId);

    console.log("this.emailid : " + this.emailid);

    console.log("this.password : " + this.password);
    //console.log("country : " + this.country);
   
    this.flag = true;
  }
  reset() {

    //this.formdata.reset();
  }

  onSubmit(data){
    this.name = data.name;
    this.emailid = data.emailid;
    this.password = data.password;
    this.cpassword = data.cpassword;
    data.bookId =0;
    //this.dob = data.dob;
    this.country=data.country;
   //let totalAge = this.CalculateAge();
   
    console.log("name : "+this.name);
    console.log("bookId : " + this.bookId);
    //console.log("totalAge : " + totalAge);
    console.log("emailid : " + this.emailid);

    console.log("password : " + this.password);
    console.log("country : " + this.country);
   
      this.PostService.PostValue(data);
      this.alert=true;
      this.time();
  }

  time(){
     setTimeout(() => {
      this.router.navigate(['login']);
    }, 6000)
  }
}