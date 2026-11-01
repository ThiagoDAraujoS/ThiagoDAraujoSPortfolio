import { Component, computed, input, signal } from '@angular/core';
import { DetailImage } from '../../models/project.model';

/** Simple image slideshow with prev/next arrows, dots and keyboard support. */
@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.html',
  styleUrl: './image-carousel.scss',
})
export class ImageCarousel {
  readonly images = input.required<DetailImage[]>();

  protected readonly index = signal(0);
  protected readonly current = computed(() => this.images()[this.index()]);

  protected go(step: number): void {
    const count = this.images().length;
    this.index.update((i) => (i + step + count) % count);
  }
}
