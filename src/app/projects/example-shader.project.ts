import { Project } from '../models/project.model';

export const exampleShader: Project = {
  id: 'example-shader',
  title: 'Stylized Water Shader',
  subtitle: 'Unity URP · Shader Graph / HLSL',
  role: 'Technical Artist',
  year: 2026,
  description: [
    'Placeholder project. Replace this text with a short description of what you built and why it is interesting.',
    'Second paragraph: technical highlights, challenges, results.',
  ],
  tags: ['HLSL', 'Unity', 'Shaders'],
  // media: { type: 'image', src: 'projects/example-shader.webp', alt: 'Water shader preview' },
  links: [{ label: 'GitHub', url: 'https://github.com/' }],
};
