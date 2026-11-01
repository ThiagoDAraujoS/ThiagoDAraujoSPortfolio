import { Project } from '../models/project.model';
import { aiRetroDiorama } from './ai-retro-diorama.project';
import { isometricSpritePipeline } from './isometric-sprite-pipeline.project';
import { electronjsFlaskProjectManager } from './electronjs-flask-project-manager.project';
import { worldmachineUnrealTerrain } from './worldmachine-unreal-terrain.project';
import { recursiveJointBaker } from './recursive-joint-baker.project';
import { houdiniPyroRevealShader } from './houdini-pyro-reveal-shader.project';
import { blenderUnityVat } from './blender-unity-vat.project';


/**
 * The card reel renders projects in this order (top to bottom).
 * To add a card: create `<name>.project.ts` in this folder, then import it and add it here.
 */
export const PROJECTS: Project[] = [
  aiRetroDiorama,
  worldmachineUnrealTerrain,
  isometricSpritePipeline,
  electronjsFlaskProjectManager,
  houdiniPyroRevealShader,
  recursiveJointBaker,
  blenderUnityVat,
];
