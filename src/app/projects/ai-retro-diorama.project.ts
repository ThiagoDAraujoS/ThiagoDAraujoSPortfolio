import { Project } from '../models/project.model';

const IMG = 'images/diorama';

export const aiRetroDiorama: Project = {
  id: 'ai-retro-diorama',
  title: 'AI Gen to Animated Retro Diorama',
  subtitle: 'AI Generation · GIMP · Unity',
  description: [
    'An AI-generated landscape broken into layered panels in GIMP and recomposed in Unity as an animated retro diorama.',
  ],
  tags: ['AI Generation', 'GIMP', 'Unity', 'Retro Style', '2D Art'],
  media: { type: 'image', src: `${IMG}/Cover.gif`, alt: 'Animated retro diorama' },

  details: [
    {
      type: 'paragraph',
      text: 'I generated a landscape with AI, then spent a short time in GIMP ripping the image apart into separate panels. Those panels were recomposed in Unity with a perspective lock, which turns the flat picture into a layered, retro-looking diorama.',
    },
    { type: 'image', image: { src: `${IMG}/diorama.jpg`, alt: 'Recomposed retro diorama' } },
    {
      type: 'paragraph',
      text: 'The result is a small, animated scene that keeps the look of the original generated image while giving it depth from the layered panels.',
    },
    { type: 'image', image: { src: `${IMG}/Diorama2.gif`, alt: 'Animated retro diorama' } },
  ],
};
