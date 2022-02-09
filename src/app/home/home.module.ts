import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeIntroComponent } from './home-intro/home-intro.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeTechComponent } from './home-tech/home-tech.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
];


@NgModule({
  declarations: [
    HomeComponent,
    HomeIntroComponent,
    HomeTechComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
