import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [],
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss',
})
export class CourseComponent implements AfterViewInit {
  @Input() header!: string;
  @Input() desc!: string;
  @Input() link!: string;
  @Input() src!: string;

  @ViewChild('child') child!: ElementRef;
  @ViewChild('parent') parent!: ElementRef;
  @ViewChild('absolute') absolute!: ElementRef;

  ngAfterViewInit(): void {
    this.setH();
    const c = this.child.nativeElement;
    const p = this.parent.nativeElement;
    p.style.height = c.offsetHeight + 'px';
    window.addEventListener('resize', function name() {
      p.style.height = c.offsetHeight + 'px';
    });
  }

  async setH() {
    await delay(200);
    const c = this.child.nativeElement;
    this.parent.nativeElement.style.height = c.offsetHeight + 'px';
  }
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
