import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryComponent } from '../reusable/gallery/gallery.component';

@Component({
  selector: 'app-cours',
  standalone: true,
  imports: [GalleryComponent],
  templateUrl: './cours.component.html',
  styleUrl: './cours.component.scss',
})
export class CoursComponent implements OnInit {
  src: string[] = ['gym.jpg', 'gym.jpg', 'gym.jpg', 'gym.jpg', 'gym.jpg'];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id']);
  }
}
