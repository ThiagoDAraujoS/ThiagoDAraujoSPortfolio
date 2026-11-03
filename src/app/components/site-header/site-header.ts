import { Component } from '@angular/core';
import { ABOUT } from '../../about.config';
import { SITE } from '../../site.config';

/** "About me" hero at the top of the page. Content comes from about.config.ts and site.config.ts. */
@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss',
})
export class SiteHeader {
  protected readonly about = ABOUT;
  /** Spaces in the file name must be encoded for the link to work. */
  protected readonly resumeUrl = encodeURI(SITE.resume);
}
