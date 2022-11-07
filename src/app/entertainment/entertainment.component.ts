import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../services/news-api.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {

  entertainmentNewsDisplay:any=[]

  constructor(private entertainmentapi:NewsApiService) { }

  ngOnInit(): void {
    this.entertainmentapi.entertainmentNews().subscribe((result)=>{
      this.entertainmentNewsDisplay = result.articles
    })
  }

}
