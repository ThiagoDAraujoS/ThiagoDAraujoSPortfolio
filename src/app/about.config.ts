/** Content of the "about me" header at the top of the page. Edit freely — no other file needs to change. */

export type AccentColor = 'cyan' | 'fuchsia' | 'amber';

export const ABOUT = {
  /** Small colored pills above the headline. */
  roles: [
    { label: 'Technical Artist', color: 'cyan' },
    { label: 'Software Engineer', color: 'fuchsia' },
    { label: 'Tools & Pipelines', color: 'amber' },
  ] satisfies { label: string; color: AccentColor }[],

  /** Big headline. `highlight` is rendered with the cyan → fuchsia → amber gradient. */
  headline: {
    lead: 'Finding New Ways to',
    highlight: 'Build, Automate, and Create',
    tail: '',
  },

  /** Photo next to the text. Path is relative to /public. Remove to hide. */
  avatar: {
    src: 'images/header/avatar.jpeg',
    alt: 'Portrait of Thiago de Araujo Silva',
  },

  /** About-me text. Each string becomes its own paragraph. */
  paragraphs: [
    'I am a Technical Artist and software engineer based in the Vancouver area who builds the tools and pipelines that make life easier for artists and engineers. I have a background in Game Programming from VFS and PUC-MG, and Technical Arts from BCIT.',
    'I have a passion for devising artistic pipelines and custom tooling that remove friction from development, whether that means writing procedural generation scripts, external tools, exploring new content creation software, or setting up efficient asset workflows.',
  ],

  /** Quick-facts strip under the text. Remove all entries to hide it. */
  facts: [
    { label: 'Based in', value: 'Vancouver area · Remote' },
    { label: 'Education', value: 'PUC-MG · VFS · BCIT' },
    { label: 'Focus', value: 'Tools · Pipelines' },
  ],
};
