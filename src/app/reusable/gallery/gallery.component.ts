import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  @Input() src!: string[];

  isImg = false;
  img!: string;

  showImg(src: string) {
    this.isImg = true;
    this.img = src;
  }

  hideImg() {
    this.isImg = false;
  }
}
