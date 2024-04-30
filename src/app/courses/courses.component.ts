import { Component, ElementRef, ViewChild } from '@angular/core';
import { CourseComponent } from './course/course.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CourseComponent, CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  @ViewChild('container') container!: ElementRef;

  names: courseData[] = [
    new courseData('BOXING', 'boxing/0.jpg', '0'),
    new courseData('DANCE', 'dance/0.jpg', '1'),
    new courseData('PERSONAL', 'personal/0.jpg', '2'),
    new courseData('STRENGTH', 'strength/0.jpg', '3'),
    new courseData('STRETCHING', 'stretching/0.jpg', '4'),
    new courseData('YOGA', 'yoga/0.jpg', '5'),
  ];
}

class courseData {
  name!: string;
  desc!: string;
  img!: string;
  link!: string;
  constructor(name: string, img: string, link: string) {
    this.name = name;
    this.img = img;
    this.link = link;
  }
}
