import { Component, OnInit } from '@angular/core';
import { AtfComponent } from './atf/atf.component';
import { NavbarComponent } from './atf/navbar/navbar.component';
import { MobileNavbarComponent } from './atf/mobile-navbar/mobile-navbar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    AtfComponent,
    NavbarComponent,
    MobileNavbarComponent,
    AboutMeComponent,
    SkillSetComponent,
    MyWorkComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}
