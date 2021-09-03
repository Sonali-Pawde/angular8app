import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
// export class ApiService {

//   private SERVER_URL = "http://localhost:3000/products";

//   constructor(private httpClient: HttpClient) { }

//   handleError(error: HttpErrorResponse) {
//     let errorMessage = 'Unknown error!';
//     if (error.error instanceof ErrorEvent) {
//       // Client-side errors
//       errorMessage = `Error: ${error.error.message}`;
//     } else {
//       // Server-side errors
//       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
//     }
//     window.alert(errorMessage);
//     return throwError(errorMessage);
//   }

//   public sendGetRequest(){
//     return this.httpClient.get(this.SERVER_URL).pipe(catchError(this.handleError));
//   }
// }

export class HttpService {

  constructor(private httpClient:HttpClient) { }
  myapp(){
    return this.httpClient.get('https://api.openbrewerydb.org/breweries')
  
    
    
  }
}