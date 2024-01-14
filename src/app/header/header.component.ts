import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ShareService } from '../shared/share.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less',
})
export class HeaderComponent implements OnInit {
  public projectsIsActiveUrl = false;
  public aboutMeIsActiveUrl = false;
  constructor(private shareService: ShareService) {}

  public ngOnInit(): void {
    this.shareService.activeUrl$.subscribe((change) => {
      this.projectsIsActiveUrl = change === 'projects' ? true : false;
      this.aboutMeIsActiveUrl = change === 'about-me' ? true : false;
    });
  }
}
