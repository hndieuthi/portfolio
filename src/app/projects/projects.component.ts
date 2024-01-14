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
  typingTexts,
} from '../shared/app.const';
import * as AOS from 'aos';
import { RouterLink } from '@angular/router';
import { merge, repeat, timer } from 'rxjs';
import { ShareService } from '../shared/share.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.less',
})
export class ProjectsComponent implements OnInit, OnDestroy {
  public imagePath = imagePath;
  public typingText = typingTexts[0];
  public visible = true;

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
    this.shareService.activeUrl$.next('projects');
    this.showTypingTexts();
  }

  public ngOnDestroy(): void {
    this.shareService.ngOnDestroy();
  }

  public showTypingTexts() {
    let i = 0;
    merge(timer(4000))
      .pipe(repeat({ delay: 1000 }))
      .subscribe({
        next: () => {
          if (isPlatformBrowser(this.platformId)) {
            AOS.refreshHard();
          }
          this.visible = false;
          i++;
          if (i >= typingTexts.length) i = 0;
          this.typingText = typingTexts[i];
          setTimeout(() => (this.visible = true));
        },
      });
  }
}
