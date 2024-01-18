import { Component, Inject, NgZone, PLATFORM_ID } from '@angular/core';
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
  selector: 'app-regreen',
  standalone: true,
  imports: [CommonModule, RouterLink, SeeNextProjectComponent],
  templateUrl: './regreen.component.html',
  styleUrl: './regreen.component.less',
})
export class RegreenComponent {
  public imagePath = imagePath;

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
      window.scrollTo(0, 0);
    }
  }
}
