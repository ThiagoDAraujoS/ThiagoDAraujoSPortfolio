import { Component, input } from '@angular/core';
import { Project } from '../../models/project.model';
import { ProjectCard } from '../project-card/project-card';

/** Vertical list of project cards. Knows nothing about individual projects. */
@Component({
  selector: 'app-card-reel',
  imports: [ProjectCard],
  templateUrl: './card-reel.html',
  styleUrl: './card-reel.scss',
})
export class CardReel {
  readonly projects = input.required<Project[]>();
}
