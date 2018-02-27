import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TechnicianModule } from './services/technician/technician.module';
import { ReviewModule} from './services/review/review.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './mainpage/mainpage.component';
import { TechDetailsComponent } from './mainpage/techdetails/techdetails.component';
import {RouterModule, Routes} from '@angular/router';
import { AgmCoreModule } from '@agm/core';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: MainPageComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    TechDetailsComponent
],
  imports: [
    BrowserModule, TechnicianModule, ReviewModule, RouterModule.forRoot(routes), AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBIwDuUzEXJ0UIjTsb6HFmvRl5_ira0yx4'
    })
  ],
  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
