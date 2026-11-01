/** Content of the "about me" header at the top of the page. Edit freely — no other file needs to change. */

export type AccentColor = 'cyan' | 'fuchsia' | 'amber';

export const ABOUT = {
  /** Small colored pills above the headline. */
  roles: [
    { label: 'Technical Artist', color: 'cyan' },
    { label: 'Game Programmer', color: 'fuchsia' },
    { label: 'Tools & Pipelines', color: 'amber' },
  ] satisfies { label: string; color: AccentColor }[],

  /** Big headline. `highlight` is rendered with the cyan → fuchsia → amber gradient. */
  headline: {
    lead: 'Hi, I make games',
    highlight: 'look and feel',
    tail: 'great.',
  },

  /** About-me text. Each string becomes its own paragraph. */
  paragraphs: [
    'Write a short intro here: who you are, what you love working on, and what kind of role you are looking for.',
    'Optional second paragraph: background, favorite tools, or what you are currently learning.',
  ],

  /** Quick-facts strip under the text. Remove all entries to hide it. */
  facts: [
    { label: 'Engines', value: 'Unity · Unreal' },
    { label: 'Languages', value: 'C# · C++ · HLSL' },
    { label: 'Tools', value: 'Blender · Houdini' },
    { label: 'Based in', value: 'Your City' },
  ],
};
