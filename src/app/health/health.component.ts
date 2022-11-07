import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../services/news-api.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  healthNewsDisplay:any=[]

  constructor(private healthapi:NewsApiService) { }

  ngOnInit(): void {
    this.healthapi.healthNews().subscribe((result)=>{
      this.healthNewsDisplay = result.articles
    })
  }

}
