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
}
