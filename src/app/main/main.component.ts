import { Component } from '@angular/core';
import { AtfComponent } from './atf/atf.component';
import { NavbarComponent } from './atf/navbar/navbar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    AtfComponent,
    NavbarComponent,
    AboutMeComponent,
    SkillSetComponent,
    MyWorkComponent,
    TestimonialsComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
