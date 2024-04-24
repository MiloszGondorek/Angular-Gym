import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { MainComponent } from './main/main.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainComponent, AboutComponent, ContactComponent, CoursesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
