import { Project } from '../models/project.model';

const IMG = 'images/joint_baker';

export const recursiveJointBaker: Project = {
  id: 'recursive-joint-baker',
  title: 'Recursive Joint Baker for Maya',
  subtitle: 'Maya · Rigging Tool',
  description: [
    'A clean, modular Maya tool that recursively iterates through joint structures, efficiently baking joint rotations into either orientation attributes or offset parent matrices.',
  ],
  tags: ['Maya', 'Rigging', 'Tooling', 'Joint Orientation', 'Offset Parent Matrix'],
  media: { type: 'image', src: `${IMG}/cover.png`, alt: 'Recursive Joint Baker for Maya' },

  details: [
    {
      type: 'paragraph',
      text: 'A clean, modular Maya tool designed to recursively iterate through joint structures, efficiently baking joint rotations into either orientation attributes or offset parent matrices.',
    },

    { type: 'heading', text: 'How It Works' },
    {
      type: 'steps',
      items: [
        {
          title: 'Recursive Traversal',
          text: 'The tool walks through the joint hierarchy recursively, visiting every joint beneath the one you start from.',
        },
        {
          title: 'Bake Targets',
          text: 'Joint rotations can be baked into either orientation attributes or offset parent matrices.',
        },
        {
          title: 'Custom Predicates',
          text: "Predicates control which joints get baked. For example, excluding 'hand' joints, or targeting only joints whose names end with 'END'.",
        },
      ],
    },

    { type: 'image', image: { src: `${IMG}/animation.gif`, alt: 'Joint baker in action' } },
  ],
};
