import { Component } from '@angular/core';
import { ABOUT } from '../../about.config';

/** "About me" hero at the top of the page. Content comes from about.config.ts. */
@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss',
})
export class SiteHeader {
  protected readonly about = ABOUT;
}
