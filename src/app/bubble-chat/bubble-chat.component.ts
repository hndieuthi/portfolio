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
  selector: 'app-bubble-chat',
  standalone: true,
  imports: [CommonModule, RouterLink, SeeNextProjectComponent],
  templateUrl: './bubble-chat.component.html',
  styleUrl: './bubble-chat.component.less',
})
export class BubbleChatComponent {
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
    }

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
