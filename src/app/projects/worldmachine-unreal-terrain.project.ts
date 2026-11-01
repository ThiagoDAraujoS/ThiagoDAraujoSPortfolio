import { Project } from '../models/project.model';

const IMG = 'images/worldmachine_unrea_terrain';

export const worldmachineUnrealTerrain: Project = {
  id: 'worldmachine-unreal-terrain-pipeline',
  title: 'World Machine & Unreal Terrain Pipeline',
  subtitle: 'World Machine · Unreal Engine · Houdini Engine',
  description: [
    'A technical art exploration of classic terrain generation and optimization techniques, integrating World Machine heightmaps, splat maps, and a custom Houdini scatter tool into Unreal Engine.',
  ],
  tags: ['World Machine', 'Unreal Engine', 'Houdini Engine', 'Splat Maps', 'Heightmaps'],
  media: { type: 'image', src: `${IMG}/editor.jpg`, alt: 'World Machine terrain in the Unreal Engine editor' },

  details: [
    {
      type: 'paragraph',
      text: 'A technical art exploration of classic terrain generation and optimization techniques, integrating World Machine heightmaps, splat maps, and a custom Houdini scatter tool into Unreal Engine.',
    },
    {
      type: 'carousel',
      images: [0, 1, 2, 3, 4, 5].map((n) => ({ src: `${IMG}/ex ${n}.jpg`, alt: `Terrain example ${n}` })),
    },

    { type: 'heading', text: 'Technical Details' },
    {
      type: 'steps',
      items: [
        {
          title: 'Shader Optimization',
          text: "To bypass Unreal's texture sampler limits, albedo luminosity maps were packed into the ORM texture alpha channel and driven by a massive color map generated in World Machine, eliminating texture repetition.",
        },
        {
          title: 'Procedural Scattering',
          text: 'Developed a custom Houdini Engine tool to automate rock and boulder placement with adjustable density, scale, and clustering controls.',
        },
      ],
    },
  ],
};
