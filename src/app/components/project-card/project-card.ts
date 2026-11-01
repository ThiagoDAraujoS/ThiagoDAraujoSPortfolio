import { Component, input } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
  host: { '[id]': 'project().id' },
})
export class ProjectCard {
  readonly project = input.required<Project>();
}
