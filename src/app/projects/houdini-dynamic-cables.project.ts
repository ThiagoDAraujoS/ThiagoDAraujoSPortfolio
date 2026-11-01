import { Project } from '../models/project.model';

const IMG = 'images/procedural cables';

export const houdiniDynamicCables: Project = {
  id: 'houdini-dynamic-cables',
  title: 'Houdini Dynamic Cables',
  subtitle: 'Houdini · Vellum · Procedural Generation',
  description: [
    'A procedural Houdini tool that cross-connects anchor points on selected monitors, adds noise to the wires, and runs Vellum so the cables settle across the floor and over the monitors.',
  ],
  tags: ['Houdini', 'Vellum', 'Procedural', 'Blender', 'Cables'],
  media: { type: 'image', src: `${IMG}/cover.gif`, alt: 'Procedural cables settling across the floor and monitors' },

  details: [
    {
      type: 'paragraph',
      text: 'I modeled a set of monitors in Blender and placed anchor points on them. In Houdini, my tool cross-connects the anchor points of the selected monitors, scrambles the wires a bit to add noise, then activates Vellum on them. Vellum respects the monitors\' collision boxes, so the cables fall naturally and drape over the screens.',
    },
    {
      type: 'paragraph',
      text: 'After the process runs, the cables are spread across the floor and on top of the monitors in a very chaotic arrangement, all generated from the same procedural setup.',
    },
  ],
};
