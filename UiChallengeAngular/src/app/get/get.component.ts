import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  appName: String;
  currentTime: String;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get("/app-time").subscribe(data => {
        this.appName = data[0];
        this.currentTime = data[1];
      }
    )
  }

}
