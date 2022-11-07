import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../services/news-api.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {

  techNewsDisplay:any=[]

  constructor(private techapi:NewsApiService) { }

  ngOnInit(): void {
    this.techapi.techNews().subscribe((result)=>{
      console.log(result.articles)
      this.techNewsDisplay = result.articles
    })
  }

}
