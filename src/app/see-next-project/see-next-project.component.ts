import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  aosImageDuration,
  aosImageOffset,
  imagePath,
} from '../shared/app.const';
import * as AOS from 'aos';

@Component({
  selector: 'app-see-next-project',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './see-next-project.component.html',
  styleUrl: './see-next-project.component.less',
})
export class SeeNextProjectComponent {
  @Input() content = '';
  @Input() subContent = '';
  @Input() redirectTo = '';
  public imagePath = imagePath;
  public test = '/zalo-connect';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  public ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: aosImageDuration,
        offset: aosImageOffset,
      });
    }
  }
}
