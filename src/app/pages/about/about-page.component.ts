import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'about-page',
  imports: [],
  templateUrl: './about-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AboutPageComponent implements OnInit {
  private title = inject(Title);

  private meta = inject(Meta);

  private platform = inject(PLATFORM_ID);

  ngOnInit(): void {
    // if (isPlatformBrowser(this.platform)) {
    //   document.title = 'About page';
    // }

    this.title.setTitle('About Page');
    this.meta.updateTag({
      name: 'description',
      content: 'Este es mi about page',
    });
    this.meta.updateTag({ name: 'og:title', content: 'Este es mi about page' });
    this.meta.updateTag({
      name: 'keywords',
      content: 'Hola, Mundo, Hugo, Cobos',
    });
  }
}
