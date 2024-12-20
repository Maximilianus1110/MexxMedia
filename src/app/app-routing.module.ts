import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ServicesComponent} from './components/services/services.component';
import {ReviewsComponent} from './components/reviews/reviews.component';
import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'about-us', component:AboutComponent},
  { path: 'services', component: ServicesComponent },
  {path: 'reviews', component:ReviewsComponent},
  {path: 'contact', component:ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
