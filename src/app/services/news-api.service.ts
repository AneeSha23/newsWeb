import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  constructor(private http: HttpClient) { }

 newsApiUrl = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=5ccb7aae9c56464cb31eef1de83ba841'


 techApiUrl ='https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=5ccb7aae9c56464cb31eef1de83ba841'

 entertainmentApiUrl = 'https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=5ccb7aae9c56464cb31eef1de83ba841'

 businessApiUrl= 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5ccb7aae9c56464cb31eef1de83ba841'

sportsApiUrl= 'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=5ccb7aae9c56464cb31eef1de83ba841'

scienceApiUrl= 'https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=5ccb7aae9c56464cb31eef1de83ba841'

 healthApiUrl= 'https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=5ccb7aae9c56464cb31eef1de83ba841'

//  generalApiUrl = 'https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=5ccb7aae9c56464cb31eef1de83ba841'

//  news api 
 topheading():Observable<any>{
  return this.http.get(this.newsApiUrl)
 }

//  tech api
techNews():Observable<any>{
  return this.http.get(this.techApiUrl)
}

// entertainment news
entertainmentNews(): Observable<any>{
  return this.http.get(this.entertainmentApiUrl)
}

// business api
businessNews(): Observable<any>{
  return this.http.get(this.businessApiUrl)
}

// sports api
sportsNews(): Observable<any>{
  return this.http.get(this.sportsApiUrl)
}

// science api
scienceNews(): Observable<any>{
  return this.http.get(this.scienceApiUrl)
}

// health api
healthNews(): Observable<any>{
  return this.http.get(this.healthApiUrl)
}

// general Api
// generalNews(): Observable<any>{
//   return this.http.get(this.generalApiUrl)
// }

}
