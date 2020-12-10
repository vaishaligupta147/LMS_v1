import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
fullname:String="Vaishali";
  constructor() { }

  ngOnInit(): void {
  }

}
