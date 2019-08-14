import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import {post} from './posts';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) {
    console.log("Estoy utilizando este servicio");
   }

   getdata(){
     return this.http.get<post[]>("https://jsonplaceholder.typicode.com/posts")
   }
}
