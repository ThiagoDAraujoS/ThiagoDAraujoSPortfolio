import { Project } from '../models/project.model';

const IMG = 'images/retrolutcompiler';

export const retrolutCompiler: Project = {
  id: 'retrolut-compiler',
  title: 'RetroLUT Compiler',
  subtitle: 'Python · Color Grading · Tooling',
  description: [
    'A standalone Python tool that compiles a .pal palette file into a discrete LUT, used to recalibrate a game’s colors for a retro look.',
  ],
  tags: ['Python', 'LUT', 'Color Grading', 'Retro Style', 'Tooling'],
  media: { type: 'image', src: `${IMG}/cover.jpg`, alt: 'RetroLUT Compiler' },

  details: [
    {
      type: 'paragraph',
      text: 'RetroLUT Compiler is a standalone tool I wrote in Python. It takes a .pal palette file and converts it into a discrete LUT (lookup table). The LUT is then applied to the game’s rendering to recalibrate its colors, giving the game a retro look without changing its assets.',
    },
    { type: 'heading', text: 'What a LUT Looks Like' },
    { type: 'image', image: { src: `${IMG}/LUTexample.jpg`, alt: 'Example of a LUT file', caption: 'Example of a LUT file' } },
    { type: 'heading', text: 'Results' },
    {
      type: 'carousel',
      images: [
        { src: `${IMG}/image1.jpg`, alt: 'Render with the first LUT' },
        { src: `${IMG}/image2.jpg`, alt: 'Render with the second LUT' },
      ],
    },
  ],
};
