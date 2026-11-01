import { Project } from '../models/project.model';

export const blenderUnityVat: Project = {
  id: 'blender-unity-vat',
  title: 'Blender to Unity VAT Animation',
  subtitle: 'Blender · Unity · OpenVAT',
  description: [
    'I modeled the cables and cloth in Blender, then moved their animation into Unity using the OpenVAT library. The motion is baked into vertex animation textures, so it plays back in the engine without a skeleton or simulation.',
  ],
  tags: ['Blender', 'Unity', 'OpenVAT', 'Vertex Animation Textures', 'Cloth'],
  media: { type: 'image', src: 'images/vattounity/cover.gif', alt: 'Cables and cloth animated with VAT in Unity' },
};
