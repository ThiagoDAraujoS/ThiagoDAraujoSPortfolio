import { Project } from '../models/project.model';
import { exampleShader } from './example-shader.project';
import { exampleGame } from './example-game.project';

/**
 * The card reel renders projects in this order (top to bottom).
 * To add a card: create `<name>.project.ts` in this folder, then import it and add it here.
 */
export const PROJECTS: Project[] = [exampleShader, exampleGame];
