import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo:'home',
        pathMatch:'prefix'
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
];

