import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'aboutme', component: HomeComponent },
  { path: 'works', component: WorksComponent }, 
  { path: 'contact', component: HomeComponent }, 
  { path: '', redirectTo: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
