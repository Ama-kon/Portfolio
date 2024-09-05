import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './main/atf/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MobileNavbarComponent } from './main/atf/mobile-navbar/mobile-navbar.component';
import { ToggleMenuService } from './services/toggle-menu.service';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MainComponent,
    FooterComponent,
    NavbarComponent,
    MobileNavbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  isMobileMenuOpen: boolean = false;
  constructor(private toggleMenuService: ToggleMenuService) {}

  ngOnInit() {
    this.isMobileMenuOpen = this.toggleMenuService.isMobileMenuOpen;
  }

  ngAfterViewInit() {
    AOS.init();
    this.preventDrag();
  }

  onToggled(isOpen: boolean) {
    this.toggleMenuService.onMenuToggled(isOpen);
    this.isMobileMenuOpen = isOpen;
  }

  preventDrag() {
    let images = document.querySelectorAll('img');
    let links = document.querySelectorAll('a');
    images.forEach((img) => {
      img.addEventListener('dragstart', (e) => e.preventDefault());
    });
    links.forEach((link) => {
      link.addEventListener('dragstart', (e) => e.preventDefault());
    });
  }
}
