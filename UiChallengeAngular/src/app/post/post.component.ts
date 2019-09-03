import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  radius: number;
  circumference: number;

  ngOnInit() {
  }

  getCircumference(radius: number)
  {
    this.httpClient.post("/circumference", radius).subscribe(data => {
        this.circumference = parseFloat(data.toString());
      }
    )
  }

}
