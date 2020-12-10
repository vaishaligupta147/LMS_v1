import { Logger } from './../service/logger';
import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
  value: number = 5;
  isPageLoaded: boolean = false;
  constructor(private route: ActivatedRoute,
    private logger: Logger) { }
   
  ngOnInit(): void {
    this.logger.logMessage("This is looger in about component. ","user1");
    this.route.params.subscribe(
      (params: Params) => {
        
        console.log(params.name);
      }
    )
    
    
    setTimeout(() => {
      this.isPageLoaded = true;
    }, 5000)
  }


 
   
  
  getColor = () => {
    return this.isPageLoaded === true ? "crimson" : "blue";
  }

}
