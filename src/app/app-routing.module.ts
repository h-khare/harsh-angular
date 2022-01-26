import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WatchesComponent } from './components/watches/watches.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent,
    pathMatch:"full"
  },
  {
    path:"watches",
    component:WatchesComponent,
    pathMatch:"full"
  },
  {
    path:"about",
    component:AboutComponent,
    pathMatch:"full"
  },
  {
    path:"contact",
    component:ContactComponent,
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
