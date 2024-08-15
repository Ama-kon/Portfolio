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
import { ToggleMenuService } from '../services/toggle-menu.service';

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
  isMobileMenuOpen: boolean = false;
  constructor(private toggleMenuService: ToggleMenuService) {}

  ngOnInit() {
    this.isMobileMenuOpen = this.toggleMenuService.isMobileMenuOpen;
  }

  onToggled(isOpen: boolean) {
    this.toggleMenuService.onMenuToggled(isOpen);
    this.isMobileMenuOpen = isOpen;
  }
}
