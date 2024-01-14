import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  aosImageDuration,
  aosImageOffset,
  imagePath,
} from '../shared/app.const';
import * as AOS from 'aos';
import { ShareService } from '../shared/share.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.less',
})
export class AboutMeComponent implements OnInit, OnDestroy {
  public imagePath = imagePath;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private shareService: ShareService
  ) {}

  public ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: aosImageDuration,
        offset: aosImageOffset,
      });
    }
    this.shareService.activeUrl$.next('about-me');
  }

  public ngOnDestroy(): void {
    this.shareService.ngOnDestroy();
  }
}
