import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { ZaloConnectComponent } from './zalo-connect/zalo-connect.component';
import { BubbleChatComponent } from './bubble-chat/bubble-chat.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'prefix',
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'about-me',
    component: AboutMeComponent,
    title: 'About me',
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    title: 'Projects',
  },
  {
    path: 'zalo-connect',
    component: ZaloConnectComponent,
    title: 'Zalo Connect',
  },
  {
    path: 'bubble-chat',
    component: BubbleChatComponent,
    title: 'Redesign voice bubble chat',
  },
];
