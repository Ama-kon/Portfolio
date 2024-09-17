import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ImprintComponent } from './imprint/imprint.component';
import { AtfComponent } from './main/atf/atf.component';
import { SkillSetComponent } from './main/skill-set/skill-set.component';
import { MyWorkComponent } from './main/my-work/my-work.component';
import { ContactComponent } from './main/contact/contact.component';
import { AboutMeComponent } from './main/about-me/about-me.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  { path: 'imprint', component: ImprintComponent },
];
