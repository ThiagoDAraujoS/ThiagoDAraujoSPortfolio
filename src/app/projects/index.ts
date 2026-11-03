import { Project } from '../models/project.model';
import { aiRetroDiorama } from './ai-retro-diorama.project';
import { isometricSpritePipeline } from './isometric-sprite-pipeline.project';
import { electronjsFlaskProjectManager } from './electronjs-flask-project-manager.project';
import { worldmachineUnrealTerrain } from './worldmachine-unreal-terrain.project';
import { recursiveJointBaker } from './recursive-joint-baker.project';
import { houdiniPyroRevealShader } from './houdini-pyro-reveal-shader.project';
import { blenderUnityVat } from './blender-unity-vat.project';
import { houdiniDynamicCables } from './houdini-dynamic-cables.project';
import { aigen25dRendering } from './aigen-2-5d-rendering.project';
import { photogrammetryPixelArt } from './photogrammetry-pixel-art.project';
import { houdiniLowpolyTree } from './houdini-lowpoly-tree.project';
import { proceduralRollingDoorRig } from './procedural-rolling-door-rig.project';
import { retrolutCompiler } from './retrolut-compiler.project';
import { blackboardSaveSystem } from './blackboard-save-system.project';


/**
 * The card reel renders projects in this order (top to bottom).
 * To add a card: create `<name>.project.ts` in this folder, then import it and add it here.
 */
export const PROJECTS: Project[] = [
  blenderUnityVat,
  worldmachineUnrealTerrain,
  aigen25dRendering,
  houdiniLowpolyTree,
  aiRetroDiorama,
  retrolutCompiler,
  isometricSpritePipeline,
  houdiniPyroRevealShader,
  photogrammetryPixelArt,
  houdiniDynamicCables,
  electronjsFlaskProjectManager,
  recursiveJointBaker,
  proceduralRollingDoorRig,
  blackboardSaveSystem,
];
