import { Project } from '../models/project.model';
import { isometricSpritePipeline } from './isometric-sprite-pipeline.project';
import { electronjsFlaskProjectManager } from './electronjs-flask-project-manager.project';
import { worldmachineUnrealTerrain } from './worldmachine-unreal-terrain.project';
import { recursiveJointBaker } from './recursive-joint-baker.project';
import { exampleShader } from './example-shader.project';
import { exampleGame } from './example-game.project';

/**
 * The card reel renders projects in this order (top to bottom).
 * To add a card: create `<name>.project.ts` in this folder, then import it and add it here.
 */
export const PROJECTS: Project[] = [
  isometricSpritePipeline,
  electronjsFlaskProjectManager,
  worldmachineUnrealTerrain,
  recursiveJointBaker,
  exampleShader,
  exampleGame,
];
