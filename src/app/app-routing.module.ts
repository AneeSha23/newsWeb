import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { HealthComponent } from './health/health.component';
import { ScienceComponent } from './science/science.component';
import { SportsComponent } from './sports/sports.component';
import { TechnewsComponent } from './technews/technews.component';
import { TopheadingsComponent } from './topheadings/topheadings.component';


const routes: Routes = [
  {path:'',component:TopheadingsComponent},
  {path:'tech',component:TechnewsComponent},
  {path:'entertainment',component:EntertainmentComponent},
  {path:'business',component:BusinessComponent},
  {path:'sports',component:SportsComponent},
  {path:'science',component:ScienceComponent},
  {path:'health',component:HealthComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
