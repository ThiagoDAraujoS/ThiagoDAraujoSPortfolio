import { Project } from '../models/project.model';

const IMG = 'images/burn_baker';

export const houdiniPyroRevealShader: Project = {
  id: 'houdini-pyro-reveal-shader',
  title: 'Houdini Pyro Spread to Real-Time Reveal Shader',
  subtitle: 'Houdini Pyro · Texture Baking · Real-Time Shader',
  description: [
    'Complex offline Pyro dynamics in Houdini, boiled down to a single texture read for instant real-time dissolve and burn effects.',
  ],
  tags: ['Houdini', 'Pyro', 'Texture Baking', 'Shader', 'VFX'],
  media: { type: 'image', src: `${IMG}/final_animation.gif`, alt: 'Real-time burn and dissolve reveal' },

  details: [
    {
      type: 'paragraph',
      text: 'This is an offline Houdini Pyro simulation baked directly into an optimized texture map to drive complex, film-quality burning and dissolution effects in real time using a lightweight reveal shader.',
    },
    { type: 'image', image: { src: `${IMG}/simulation_animation.gif`, alt: 'Houdini Pyro simulation' } },

    { type: 'heading', text: 'Why It Works' },
    {
      type: 'steps',
      items: [
        {
          title: 'Zero Runtime Overhead',
          text: 'The simulation is resolved ahead of time, so the shader only reads a texture at runtime.',
        },
        {
          title: 'Cinematic Detail on Cheap Hardware',
          text: 'Film-quality burn detail without the cost of running a simulation in real time.',
        },
        {
          title: 'Single-Channel Timing',
          text: 'The exact burn timing is baked into one channel, leaving the remaining texture channels free for edge glow, ash masks, or distortion vectors.',
        },
      ],
    },

    { type: 'image', image: { src: `${IMG}/final_texture.jpg`, alt: 'Baked reveal texture', caption: 'Baked texture' } },
  ],
};
