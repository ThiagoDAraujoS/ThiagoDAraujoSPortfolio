import { Project } from '../models/project.model';

const IMG = 'images/aigen25drender';

export const aigen25dRendering: Project = {
  id: 'aigen-2-5d-rendering',
  title: 'AIGen to 2.5D Rendering',
  subtitle: 'AI Generation · 2.5D Rendering · Light Probes',
  description: [
    'A 2.5D scene built from an AI-generated environment, where light probes trained on a shadow model light dynamic objects as if they existed inside the image.',
  ],
  tags: ['AI Generation', '2.5D', 'Light Probes', 'Lighting', 'Compositing'],
  media: { type: 'image', src: `${IMG}/cover.jpg`, alt: 'AI-generated 2.5D environment' },

  details: [
    {
      type: 'paragraph',
      text: 'The project starts with an AI-generated environment image. I cropped it into foreground panels, which give the scene depth through layering.',
    },
    {
      type: 'paragraph',
      text: 'To light the scene convincingly, I built a shadow model that serves as a reference for the light probes. It teaches them which areas should read as shadow and which as light. The probes are then applied only to dynamic objects, so characters and props sit inside the image as if they were part of the original environment.',
    },
    { type: 'image', image: { src: `${IMG}/shadow1.jpg`, alt: 'Light probe reference, view 1', caption: 'Shadow model used to train the light probes' } },
    { type: 'image', image: { src: `${IMG}/shadow2.jpg`, alt: 'Light probe reference, view 2', caption: 'Shadow model used to train the light probes' } },
    { type: 'heading', text: 'Final Result' },
    { type: 'image', image: { src: `${IMG}/image1.jpg`, alt: 'Final 2.5D render with dynamic objects lit by the probes' } },
  ],
};
