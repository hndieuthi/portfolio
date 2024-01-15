import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import {
  aosImageDuration,
  aosImageOffset,
  imagePath,
} from '../shared/app.const';
import * as AOS from 'aos';
import { SeeNextProjectComponent } from '../see-next-project/see-next-project.component';

@Component({
  selector: 'app-florist',
  standalone: true,
  imports: [CommonModule, RouterLink, SeeNextProjectComponent],
  templateUrl: './florist.component.html',
  styleUrl: './florist.component.less',
})
export class FloristComponent {
  public imagePath = imagePath;
  public outflorist8 =
    'https://lh3.googleusercontent.com/d/1ldZRFfBnSfjkL2uvJCJoFWaEKVnO8DW9';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {}

  public ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: aosImageDuration,
        offset: aosImageOffset,
      });
    }

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
