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
    new courseData('BOXING', 'box_small.png', '1'),
    new courseData('YOGA', 'yoga_small.png', '2'),
    new courseData('STRENGTH', 'strength_small.png', '3'),
    new courseData('PERSONAL', 'personal_small.png', '4'),
    new courseData('BOXING', 'box_small.png', '5'),
    new courseData('YOGA', 'yoga_small.png', '6'),
  ];

  public funTest(el: any) {
    const c = this.container.nativeElement.querySelectorAll('.sContainer');
    Array.from(c).forEach((element: any) => {
      element.style.zIndex = '0';
    });

    el.absolute.nativeElement.style.zIndex = '2';
  }
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
