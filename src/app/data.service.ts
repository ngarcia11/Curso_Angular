import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) {
    console.log("Estoy utilizando este servicio");
   }

   getdata(){
     return this.http.get("https://jsonplaceholder.typicode.com/posts")
   }
}
