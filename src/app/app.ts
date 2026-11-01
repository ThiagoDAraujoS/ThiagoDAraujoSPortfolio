import { Component } from '@angular/core';
import { SiteNav } from './components/site-nav/site-nav';
import { SiteHeader } from './components/site-header/site-header';
import { CardReel } from './components/card-reel/card-reel';
import { SiteFooter } from './components/site-footer/site-footer';
import { PROJECTS } from './projects';

@Component({
  imports: [SiteNav, SiteHeader, CardReel, SiteFooter],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly projects = PROJECTS;
}
