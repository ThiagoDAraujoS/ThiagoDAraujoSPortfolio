import { Project } from '../models/project.model';

export const exampleGame: Project = {
  id: 'example-game',
  title: 'Example Game Jam Project',
  subtitle: 'Unreal Engine 5 · C++',
  role: 'Gameplay Programmer',
  year: 2025,
  description: ['Placeholder project. Describe the game, your contribution, and the tech involved.'],
  tags: ['C++', 'Unreal', 'Gameplay'],
  links: [
    { label: 'itch.io', url: 'https://itch.io/' },
    { label: 'Video', url: 'https://youtube.com/' },
  ],
};
