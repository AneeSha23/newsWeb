import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../services/news-api.service';

@Component({
  selector: 'app-topheadings',
  templateUrl: './topheadings.component.html',
  styleUrls: ['./topheadings.component.css']
})
export class TopheadingsComponent implements OnInit {

  topHeadDisplay:any=[]

  constructor(private newapi:NewsApiService) { }

  ngOnInit(): void {
    this.newapi.topheading().subscribe((result)=>{
      console.log(result)
      this.topHeadDisplay = result.articles
    })
  }

}
