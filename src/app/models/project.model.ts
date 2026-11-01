/** A link shown at the bottom of a project card (GitHub, itch.io, YouTube, ...). */
export interface ProjectLink {
  label: string;
  url: string;
}

/** Thumbnail/preview for a card. Paths are relative to /public (e.g. 'projects/my-shader.webp'). */
export interface ProjectMedia {
  type: 'image' | 'video';
  src: string;
  alt?: string;
}

/** An image inside the "Read more" write-up. Path is relative to /public. */
export interface DetailImage {
  src: string;
  alt?: string;
  caption?: string;
}

/**
 * One block of the "Read more" write-up. A write-up is just a list of these, rendered top to bottom.
 * - heading / subheading: section titles
 * - paragraph: a block of text
 * - image: a single full-width image
 * - carousel: a set of images with prev/next arrows
 * - steps: a list of named steps ("Rendering: Each camera is rendered...")
 */
export type DetailBlock =
  | { type: 'heading'; text: string }
  | { type: 'subheading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'image'; image: DetailImage }
  | { type: 'carousel'; images: DetailImage[] }
  | { type: 'steps'; items: { title: string; text: string }[] };

/** Everything a project card needs. One Project = one file in src/app/projects/. */
export interface Project {
  /** Unique, kebab-case. Also used as the card's HTML id for deep links (#my-project). */
  id: string;
  title: string;
  /** Short one-liner under the title, e.g. "Unreal Engine 5 · Tech Art". */
  subtitle?: string;
  /** Your role on the project, e.g. "Solo dev", "Technical Artist". */
  role?: string;
  year?: number | string;
  /** Short paragraphs of description. Each string is rendered as its own <p>. */
  description: string[];
  tags?: string[];
  media?: ProjectMedia;
  links?: ProjectLink[];
  /** Optional long write-up. When present, the card shows a "Read more" button that opens it. */
  details?: DetailBlock[];
}
