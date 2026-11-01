import { Project } from '../models/project.model';
import { isometricSpritePipeline } from './isometric-sprite-pipeline.project';
import { electronjsFlaskProjectManager } from './electronjs-flask-project-manager.project';
import { exampleShader } from './example-shader.project';
import { exampleGame } from './example-game.project';

/**
 * The card reel renders projects in this order (top to bottom).
 * To add a card: create `<name>.project.ts` in this folder, then import it and add it here.
 */
export const PROJECTS: Project[] = [
  isometricSpritePipeline,
  electronjsFlaskProjectManager,
  exampleShader,
  exampleGame,
];
