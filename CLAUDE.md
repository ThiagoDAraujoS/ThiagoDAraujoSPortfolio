# Portfolio (Angular, GitHub Pages)

Single-page portfolio for a technical artist / game programmer. No routing, no backend.

## Layout

```
src/app/
  site.config.ts            # name, tagline, email, socials (nav + footer read this)
  about.config.ts           # about-me hero content: role pills, headline, paragraphs, quick facts
  models/project.model.ts   # Project interface — the shape of every card
  projects/
    index.ts                # PROJECTS array — order here = order in the reel
    *.project.ts            # one file per project card
  components/
    site-nav/               # sticky top bar with section links (#about, #projects, #contact)
    site-header/            # about-me hero (id="about")
    card-reel/              # vertical list, renders PROJECTS
    project-card/           # renders one Project (+ "Read more" button when it has `details`)
    project-detail/         # <dialog> that renders a Project's `details` blocks
    image-carousel/         # prev/next slideshow used by `carousel` blocks
    site-footer/            # contact + socials
src/styles.scss             # global theme tokens (CSS variables)
public/projects/            # images / videos for cards
public/images/header/       # avatar photo used by the about-me header
                            # (only files under public/ are served — never put assets elsewhere)
```

## Adding a new card (only touch these files)

1. Create `src/app/projects/<kebab-name>.project.ts` exporting a `Project` (copy `example-shader.project.ts`).
2. Import it in `src/app/projects/index.ts` and add it to `PROJECTS`.
3. Media goes in `public/images/<project_folder>/`, referenced as `'images/<project_folder>/<file>'` (no leading slash).
4. Long write-ups go in the optional `details: DetailBlock[]` field (heading, subheading, paragraph, image,
   carousel, steps — see `project.model.ts`). `isometric-sprite-pipeline.project.ts` is the reference example.
   Keep `description` to 1–2 sentences; it's the card summary.

Do not modify components to add a card. Only change `project.model.ts` + `project-card` if a new *field* is needed.

## Conventions

- Standalone components, signal `input()`, built-in control flow (`@if`, `@for`).
- Colors/fonts come from CSS variables in `src/styles.scss`; don't hard-code colors in components.
  Palette: near-black navy bg, slate surfaces, cyan / fuchsia / amber accents. Mono font for labels, Inter for text.
- Shared global classes in `styles.scss`: `.pill .pill--cyan|fuchsia|amber`, `.gradient-text`, `.section-label`.
- `<base href="./">` is relative so `ng build` output works on any GitHub Pages path.
