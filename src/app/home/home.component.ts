import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  apiResponse: any;	

  constructor(public apis: ApiService) { }

  ngOnInit() {
  }

  makeApiCallGET() {
  	this.apis.queryApi()
  	.subscribe(
  		d => {
  			this.apiResponse = d;
  			console.log(d);
  		},
  		e => {
  			this.apiResponse = e;
  			console.log('No response ' + e);
  		}
  	)
  }

  makeApiCallPOST() {
    this.apis.postqueryApi()
    .subscribe(
      d => {
        this.apiResponse = d;
        console.log(d);
      },
      e => {
        this.apiResponse = e;
        console.log('No response ' + e);
      }
    )
  }
}
