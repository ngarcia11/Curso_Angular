import { Component } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = ['Sady', 'Keyla',  'Juan'];
  activate= false;

  nombre: string = 'Sady Garcia';
   edad: number = 21;
  name: string = 'Norlan Garcia' ;
 age: number = 21;
 address: {
street: string;
city: string ;
};
hobbies: string[];

/*
constructor(){
  this.name = 'Norlan Garcia';
  this.age = 21;
   this.address = {
  street : 'Calle del comercio',
  city : 'Tegucigalpa'
 };
this.hobbies = ['Nadar', 'Leer', 'Programar'];
}
*/
delete(user) {
for(let i=0; i < this.users.length; i ++){
  if (user == this.users[i]){
    this.users.splice(i,1);
  }
}
}

addUser(newUser){
this.users.push(newUser.value);
newUser.value = "";
newUser.focus;
return false;
}
constructor(private dataservice: DataService){
 this.dataservice.getdata();
}

posts = [];

}