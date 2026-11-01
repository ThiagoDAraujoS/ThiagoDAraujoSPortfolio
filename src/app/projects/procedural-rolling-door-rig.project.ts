import { Project } from '../models/project.model';

const IMG = 'images/bakedrigs';

export const proceduralRollingDoorRig: Project = {
  id: 'procedural-rolling-door-rig',
  title: 'Procedural Rolling Door Rig',
  subtitle: 'Procedural Animation · Rigging · Animation Baking',
  description: [
    'A rolling door driven by a procedural spiral curve, with a rig that tracks the curve points into joints and bakes the motion into standard rig animation.',
  ],
  tags: ['Procedural Animation', 'Rigging', 'Animation Baking', 'Curves'],
  media: { type: 'image', src: `${IMG}/Cover.gif`, alt: 'Rolling door rig animation' },

  details: [
    {
      type: 'paragraph',
      text: 'The door is built from a curve shaped by a curve modifier, which rolls the curve into a spiral. A rig then tracks the points along that curve into joints, so the door’s motion comes from the procedural setup rather than being keyframed by hand.',
    },
    {
      type: 'steps',
      items: [
        {
          title: 'Procedural Curve',
          text: 'A curve modifier rolls the curve into a spiral, which drives the rolling motion.',
        },
        {
          title: 'Tracking Rig',
          text: 'A rig follows the points of the curve and maps them onto joints.',
        },
        {
          title: 'Baked Animation',
          text: 'The procedural motion is baked into a rig animation, so the door plays back as ordinary keyframed animation.',
        },
      ],
    },
  ],
};
