import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiLINK: any = 'http://localhost:3000/api/';

  constructor(public http: HttpClient) { }

  setHeaders() {
	  	const httpOptions = {
		  headers: new HttpHeaders({
		    'Content-Type':  'application/json',
		    'Authorization': 'Basic my-auth-token'
		  })
		};
		return httpOptions;
  }

  queryApi(): Observable<any> {
  	return this.http.get(`${this.apiLINK}` + 'user');
  }

  postqueryApi(): Observable<any> {
  	const postParam = {
  		username: 'NODEUSER',
  		email: 'node@user'
  	}
  	return this.http.post(`${this.apiLINK}` + 'setuser', postParam, this.setHeaders());
  }
}
