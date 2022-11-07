import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../services/news-api.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  sportsNewsDisplay:any=[]

  constructor(private sportapi:NewsApiService) { }

  ngOnInit(): void {
    this.sportapi.sportsNews().subscribe((result)=>{
      this.sportsNewsDisplay = result.articles
    })
  }

}
