import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../services/news-api.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  businessNewsDisplay:any=[]

  constructor(private businessApi:NewsApiService) { }

  ngOnInit(): void {
    this.businessApi.businessNews().subscribe((result)=>{
      this.businessNewsDisplay = result.articles
    })
  }

}
