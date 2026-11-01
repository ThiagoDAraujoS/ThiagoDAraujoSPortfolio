import { Project } from '../models/project.model';

const IMG = 'images/photogrametry_to_pixelart';

export const photogrammetryPixelArt: Project = {
  id: 'photogrammetry-pixel-art',
  title: 'Photogrammetry to Pixel Art',
  subtitle: 'Photogrammetry · Houdini · Pixel Art',
  description: [
    'A pipeline that turns photogrammetry point clouds into pixel art, rendering them in Houdini with simplified palettes and low resolution.',
  ],
  tags: ['Photogrammetry', 'Houdini', 'Point Clouds', 'Pixel Art', 'Palette Reduction'],
  media: { type: 'image', src: `${IMG}/cover.jpg`, alt: 'Photogrammetry to pixel art' },

  details: [
    {
      type: 'paragraph',
      text: 'Photogrammetry captures a real object as a point cloud. In Houdini, the pipeline reconstructs a mesh from that cloud, then renders it with a simplified colour palette at low resolution, turning a real-world reference into pixel art.',
    },
    { type: 'image', image: { src: `${IMG}/img1.jpg`, alt: 'Object as a point cloud', caption: 'The object as a point cloud' } },
    { type: 'image', image: { src: `${IMG}/img2.jpg`, alt: 'Mesh being generated from the point cloud', caption: 'Zoomed in: the mesh being generated from the point cloud' } },
    { type: 'image', image: { src: `${IMG}/img3.jpg`, alt: 'Untreated pixel art render', caption: 'Untreated pixel art render' } },
  ],
};
