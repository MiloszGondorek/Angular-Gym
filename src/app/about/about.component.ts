import { Component } from '@angular/core';
import { GalleryComponent } from '../reusable/gallery/gallery.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [GalleryComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  src: string[] = [
    'gym.jpg',
    'gym2.jpg',
    'courses/boxing/0.jpg',
    'courses/yoga/0.jpg',
    'courses/personal/2.jpg',
  ];
}
