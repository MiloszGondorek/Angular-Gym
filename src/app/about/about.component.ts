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
  src: string[] = ['gym.jpg', 'gym.jpg', 'gym.jpg', 'gym.jpg', 'gym.jpg'];
}
