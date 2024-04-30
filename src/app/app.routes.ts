import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { AboutComponent } from './about/about.component';
import { CoursComponent } from './course/course.component';

export const routes: Routes = [
  { path: 'courses', component: CoursesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'courses/:id', component: CoursComponent },
  { path: '**', component: HomeComponent },
];
