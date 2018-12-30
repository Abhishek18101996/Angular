import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CandidateComponent } from './candidate/candidate.component';
import { EstablishmentComponent } from './establishment/establishment.component';
import { SearchComponent } from './search/search.component';
import { EloginComponent } from './elogin/elogin.component';
import { CloginComponent } from './clogin/clogin.component';
import {appRoutes} from './routerConfig';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CandidateComponent,
    EstablishmentComponent,
    SearchComponent,
    EloginComponent,
    CloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
