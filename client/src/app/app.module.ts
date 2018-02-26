import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TechnicianModule } from './services/technician/technician.module';
import { ReviewModule} from './services/review/review.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './mainpage/mainpage.component';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: MainPageComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent

  ],
  imports: [
    BrowserModule, TechnicianModule, ReviewModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
