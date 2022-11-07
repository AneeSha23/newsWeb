import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

import { AppComponent } from './app.component';
import { TopheadingsComponent } from './topheadings/topheadings.component';
import { HeaderComponent } from './header/header.component';

import { NewsApiService } from './services/news-api.service';
import { TechnewsComponent } from './technews/technews.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { BusinessComponent } from './business/business.component';
import { SportsComponent } from './sports/sports.component';
import { ScienceComponent } from './science/science.component';
import { HealthComponent } from './health/health.component';

@NgModule({
  declarations: [
    AppComponent,
    TopheadingsComponent,
    HeaderComponent,
    TechnewsComponent,
    EntertainmentComponent,
    BusinessComponent,
    SportsComponent,
    ScienceComponent,
    HealthComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule
  ],
  providers: [NewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
