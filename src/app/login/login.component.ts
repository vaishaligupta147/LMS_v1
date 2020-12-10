import { UserDetails } from './../UserDetails';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { Logger } from '../service/logger';
import { RegisterService } from '../service/register.service';
import { PostService } from './../services/post.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isPageLoaded: boolean = false;
  formdata: any;
  emailid: string;
  password: string;
  users: User[];

  //user  : any = new User();
  loading = false;
  submitted = false;
  returnUrl: string;
  message: boolean;
  role:string;
  constructor(private logger:Logger, private registerService:RegisterService, 
    private router: Router, private postService : PostService ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isPageLoaded = true;
    }, 3000)
    this.formdata = new FormGroup({
      emailid: new FormControl(this.emailid, Validators.required),
      password: new FormControl(this.password, Validators.required),
      
   });
   
  }
  get f() { return this.formdata.controls; }
  onSubmit(data){
    //this.submitted = true;
    // stop here if form is invalid
  //   if (this.formdata.invalid) {
  //     return;
  // }
    this.emailid = data.emailid;
    this.password = data.password;
    
    console.log("emailid : " + this.emailid);
    console.log("password : " + this.password);
      
    //let users = this.postService.FetchPost2().subscribe(res=> res);
    //console.log(users);
    this.postService.FetchPost2().subscribe((res)=> {
    
      this.users = res;
      console.log(res);
      //console.log(this.users[0].password);
    let userFoundFlag: boolean = false;
    for (let i = 0; i < this.users.length; i++) {
      // console.log(this.users[i].userName ===  this.emailid );
      // console.log(this.users[i].password === this.f.password.value);
      if (this.users[i].userName ===  this.emailid && this.users[i].password === this.password) {
       console.log("57: user found " + this.users[i].id + " redirecting to home");
       let id = this.users[i].id;
       let stringForm = id.toString();
       console.log("id "+stringForm);
       localStorage.setItem('role', this.users[i].role);
       localStorage.setItem('userId', stringForm);
       console.log(localStorage.getItem('role'));
       
       console.log("hi "+localStorage.getItem('userId'));
        userFoundFlag = true;
      }
    }
   
    if (userFoundFlag) {
      //console.log("62: user not found showing invalid creds");
      this.router.navigate(['home']);
     
      //localStorage.setItem('currentUser', JSON.stringify(user));
     // this.currentUserSubject.next(user);
      //sessionStorage.setItem('loggedUser', form2.value.username);
    } else {
      this.message=true;
      
    
      this.router.navigate(['']);
      return;
    }
   
   
  });

    
  
}
reset(){
  this.message=false;
  
}   
  
}
