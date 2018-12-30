import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {CandidateComponent} from './candidate/candidate.component';
import {EstablishmentComponent} from './establishment/establishment.component';
import {SearchComponent} from './search/search.component';
import {EloginComponent} from './elogin/elogin.component';
import {CloginComponent} from './clogin/clogin.component';
import { from } from 'rxjs';

const routes: Routes = [
  {path:'about', component:AboutComponent},
  {path:'home', component:HomeComponent},
  {path:'candidate', component:CandidateComponent},
  {path:'establishment', component:EstablishmentComponent},
  {path:'search', component:SearchComponent},
  {path:'', component:HomeComponent},
  {path:'',component:EloginComponent},
  {path:'',component:CloginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
