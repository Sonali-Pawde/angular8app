import { Component, OnInit } from '@angular/core';  
//import { ApiService } from '../api.service';
import {HttpService } from '../http.service'
@Component({  
	selector: 'app-home',  
	templateUrl: './home.component.html',  
	styleUrls: ['./home.component.css']  
})  
export class HomeComponent implements OnInit {
	products:any[] = [];
	//products = [];
	constructor(private Httpservice: HttpService) {this.products = []; }
	
	ngOnInit() {
		this.Httpservice.app1().subscribe((data:any) => {
			this.products=data;
			console.log(this.products); 
		  });
		 
	}
}