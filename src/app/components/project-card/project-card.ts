import { Component, input } from '@angular/core';
import { Project } from '../../models/project.model';
import { ProjectDetail } from '../project-detail/project-detail';

@Component({
  selector: 'app-project-card',
  imports: [ProjectDetail],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
  host: { '[id]': 'project().id' },
})
export class ProjectCard {
  readonly project = input.required<Project>();
}
