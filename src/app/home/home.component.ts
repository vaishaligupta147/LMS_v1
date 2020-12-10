import { Book } from './../models/book';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';

import { PostService } from '../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user = [];
  users: User[] = [];
  books: Book[] = [];
  book = new Book();
  inStackFlag = false;
  name: string;
  role: string;
  constructor(
    private postService: PostService,
    private router: Router) {
  }

  ngOnInit(): void {

    this.postService.FetchAllBooks().subscribe(books => {
      this.books = books;
      //console.log(this.books);
    });
    this.role = localStorage.getItem('role');
    console.log("hi "+localStorage.getItem('userId'));
    console.log(this.role);
  }

  search() {
    if (this.name == "") {
      this.ngOnInit();
    } else {
      this.books = this.books.filter(res => {

        return res.title.toLocaleLowerCase().match(this.name.toLocaleLowerCase()) ||
          res.author.toLocaleLowerCase().match(this.name.toLocaleLowerCase())
      })

    }
  }

  issue(data) {
    console.log(data);
     
    this.postService.FetchBookById(data).subscribe(res => {
      this.book = res;
      console.log("res.noOfCopies " + res.noOfCopies);

      if(res.noOfCopies==1){
        console.log("book1 " + res.noOfCopies);
        res.inStock=false;
       // this.inStackFlag=true;
       res.noOfCopies=res.noOfCopies-1;
      }else{
        res.noOfCopies=res.noOfCopies-1;
      }
      const obj = {
        'id': res.id,
        'title': res.title,
        'author': res.author,
        'noOfCopies': res.noOfCopies,
        'location': res.location,
        'inStock': res.inStock
      }
     
      this.postService.UpdateBook(data,obj).subscribe(() => {
        console.log("Book Issued");
        //this.time();
      });
    });

    this.postService.FetchUserById
 
    localStorage.getItem('userId')
    
      this.router.navigate(['home']);
  }

  checkDetails(id){

  }

 
}
