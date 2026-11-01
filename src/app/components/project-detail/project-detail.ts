import { Component, ElementRef, input, signal, viewChild } from '@angular/core';
import { Project } from '../../models/project.model';
import { ImageCarousel } from '../image-carousel/image-carousel';

/** Full-screen "Read more" panel that renders a project's `details` blocks. Opened by the project card. */
@Component({
  selector: 'app-project-detail',
  imports: [ImageCarousel],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
})
export class ProjectDetail {
  readonly project = input.required<Project>();

  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');
  /** Content is only rendered while open, so its images don't load with the page. */
  protected readonly isOpen = signal(false);

  open(): void {
    this.isOpen.set(true);
    this.dialog().nativeElement.showModal();
  }

  close(): void {
    this.dialog().nativeElement.close();
  }

  /** Clicking the dark backdrop (outside the panel) closes it. */
  protected onDialogClick(event: MouseEvent): void {
    if (event.target === this.dialog().nativeElement) this.close();
  }
}
