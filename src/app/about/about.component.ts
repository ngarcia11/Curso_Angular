import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { post } from '../posts';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
posts: post[];

  constructor(private dataServices: DataService) {
    this.dataServices.getdata().subscribe(data => {
      this.posts = data;
    });
   }

  ngOnInit() {
  }

}
