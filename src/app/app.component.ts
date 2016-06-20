import { Component } from '@angular/core';
import { Routes } from '@ngrx/router';
import {HomePage} from 'home-page/HomePageComponent';
import {BlogPage} from 'blog-page/BlogPageComponent';


const routes: Routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/blog',
    component: BlogPage
  }
]

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
