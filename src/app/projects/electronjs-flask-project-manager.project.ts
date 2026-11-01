import { Project } from '../models/project.model';

const IMG = 'images/electronjs_flask';

export const electronjsFlaskProjectManager: Project = {
  id: 'electronjs-flask-project-manager',
  title: 'ElectronJS + Flask.py Project Manager',
  subtitle: 'ElectronJS · Python · Flask',
  description: [
    'A desktop pipeline application built to automate and manage project files, folders, and metadata for entertainment studio workflows.',
  ],
  tags: ['ElectronJS', 'Python', 'Flask', 'MVC', 'Materialize'],
  media: { type: 'image', src: `${IMG}/Cover.png`, alt: 'ElectronJS + Flask project manager' },

  details: [
    {
      type: 'paragraph',
      text: 'A desktop pipeline application built to automate and manage project files, folders, and metadata for entertainment studio workflows.',
    },
    {
      type: 'carousel',
      images: [1, 2, 3].map((n) => ({ src: `${IMG}/Example ${n}.jpg`, alt: `Project manager screenshot ${n}` })),
    },

    { type: 'heading', text: 'Technical Implementation' },
    {
      type: 'steps',
      items: [
        {
          title: 'Architecture',
          text: 'Uses an ElectronJS desktop frontend communicating with a Python/Flask backend server.',
        },
        {
          title: 'Separation of Concerns',
          text: 'Follows a strict Model-View-Controller (MVC) pattern where the UI acts purely as the View/Controller, sending requests to the Flask server to process data updates asynchronously.',
        },
        {
          title: 'UI & Iteration',
          text: 'Built using Google\'s Materialize framework, serving as a practical exercise in bridging web-based frontends with local Python pipeline tools.',
        },
      ],
    },
  ],
};
