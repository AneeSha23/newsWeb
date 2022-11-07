import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../services/news-api.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {

  scienceNewsDisplay:any=[]

  constructor(private scienceapi:NewsApiService) { }

  ngOnInit(): void {
    this.scienceapi.scienceNews().subscribe((result)=>{
      this.scienceNewsDisplay = result.articles
    })
  }

}
