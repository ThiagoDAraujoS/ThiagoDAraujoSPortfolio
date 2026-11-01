import { Component } from '@angular/core';
import { SITE } from '../../site.config';

/** Sticky top bar with your name and links to the page sections. */
@Component({
  selector: 'app-site-nav',
  templateUrl: './site-nav.html',
  styleUrl: './site-nav.scss',
})
export class SiteNav {
  protected readonly site = SITE;
  protected readonly links = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];
}
