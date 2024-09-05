import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToggleMenuService {
  constructor() {}
  isMobileMenuOpen: boolean = false;

  onMenuToggled(isOpen: boolean) {
    this.isMobileMenuOpen = isOpen;
    if (this.isMobileMenuOpen) {
      document.querySelector('.nav-bar-container')?.classList.add('z-1000');
    } else {
      document.querySelector('.nav-bar-container')?.classList.remove('z-1000');
    }
  }

  toggleMenu() {
    document.querySelectorAll('#nav-icon-mobile').forEach((span) => {
      span.classList.toggle('open');
    });
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (this.isMobileMenuOpen) {
      document.querySelector('app-mobile-navbar')?.classList.remove('d-none');
      document.querySelector('.headlines-container')?.classList.add('d-none');
    } else {
      document.querySelector('app-mobile-navbar')?.classList.add('d-none');
      document
        .querySelector('.headlines-container')
        ?.classList.remove('d-none');
    }
  }
}
