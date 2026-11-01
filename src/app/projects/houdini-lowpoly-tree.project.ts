import { Project } from '../models/project.model';

const IMG = 'images/procedural_lowpoly_tree';

export const houdiniLowpolyTree: Project = {
  id: 'houdini-lowpoly-tree',
  title: 'Houdini Low Poly Tree',
  subtitle: 'Houdini · Procedural · Low Poly',
  description: [
    'A low poly tree built with Houdini tree tools, where the leaves are pre-rendered branches of the same tree to save resources.',
  ],
  tags: ['Houdini', 'Procedural', 'Low Poly', 'Tree Tools', 'Optimization'],
  media: { type: 'image', src: `${IMG}/cover.jpg`, alt: 'Low poly tree made in Houdini' },

  details: [
    {
      type: 'paragraph',
      text: 'The tree is built with Houdini’s tree tools to keep the geometry low poly. To save resources, the leaves are not individual meshes. They are pre-rendered branches of this same tree, so the foliage costs very little to draw while still matching the tree’s shape.',
    },
    { type: 'image', image: { src: `${IMG}/leaf.jpg`, alt: 'Pre-rendered leaf branches of the same tree', caption: 'Leaves: pre-rendered branches of the same tree' } },
  ],
};
