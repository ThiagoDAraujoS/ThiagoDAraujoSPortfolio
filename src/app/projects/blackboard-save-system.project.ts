import { Project } from '../models/project.model';

const IMG = 'images/blackboard';

export const blackboardSaveSystem: Project = {
  id: 'blackboard-save-system',
  title: 'BlackBoard Save System',
  subtitle: 'Unity · Serialization · RAII Architecture',
  description: [
    'A universal serialization module for Unity games, built on a RAII architecture. Entities save and restore their own data as they are created and destroyed, and a save game is an atomic copy of a live session folder.',
  ],
  tags: ['Unity', 'C#', 'Serialization', 'RAII', 'Save Systems'],
  media: { type: 'image', src: `${IMG}/blackboard.jpg`, alt: 'BlackBoard Save System' },
  links: [{ label: 'Project page & repository', url: 'https://thiagodaraujos.github.io/BlackboardSaveSystem/' }],

  details: [
    {
      type: 'paragraph',
      text: 'A decoupled, high-performance RAII serialization management framework for Unity. Designed with 4-level state partitioning, reference-counted BlackboardFile lifecycles and easy local variable tracking with Tracked<T> decorators.',
    },
    { type: 'image', image: { src: `${IMG}/flow.svg`, alt: 'Diagram of the save flow from anchors to save archive', caption: 'Save flow: anchors → blackboard → session → archive' } },
    {
      type: 'steps',
      items: [
        {
          title: 'Anchor Objects',
          text: 'Anchors deserialize JSON files into dictionaries when they are created, and serialize them back when they are destroyed.',
        },
        {
          title: 'Blackboard',
          text: 'Entities find themselves in the blackboard dictionary and update or upload their data on creation and destruction.',
        },
        {
          title: 'Game Sessions',
          text: 'A save file is a folder of small JSON files. The system opens it as a game session and receives changes live as anchors are created and destroyed.',
        },
        {
          title: 'Save Games',
          text: 'When a save game is requested, the session files are atomically copied into a save archive.',
        },
      ],
    },
  ],
};
