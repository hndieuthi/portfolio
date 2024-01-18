import {
  AfterViewInit,
  Component,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  ViewChild,
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
import { ShareService } from '../shared/share.service';
// @ts-ignore
import Typewriter from 'typewriter-effect/dist/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.less',
})
export class ProjectsComponent implements OnInit, OnDestroy, AfterViewInit {
  public imagePath = imagePath;
  public typingText = typingTexts[0];
  public visible = true;
  @ViewChild('tw') typewriterElement: any;

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
      window.scrollTo(0, 0);
    }
    this.shareService.activeUrl$.next('projects');
  }

  public ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.showTypingTexts();
    }
  }

  public ngOnDestroy(): void {
    this.shareService.ngOnDestroy();
  }

  public showTypingTexts() {
    const target = this.typewriterElement.nativeElement;
    const writer = new Typewriter(target, {
      strings: typingTexts,
      autoStart: true,
      cursor: '',
      loop: true,
    });
  }
}
