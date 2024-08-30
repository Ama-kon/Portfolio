import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToggleMenuService } from '../../../services/toggle-menu.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-mobile-navbar',
  standalone: true,
  imports: [NavbarComponent, TranslateModule],
  templateUrl: './mobile-navbar.component.html',
  styleUrl: './mobile-navbar.component.scss',
})
export class MobileNavbarComponent {
  constructor(
    private toggleMenuService: ToggleMenuService,
    private translate: TranslateService
  ) {}
  @Input() isMobileMenuOpen: boolean = false;
  @Output() menuToggled = new EventEmitter<boolean>();
  closeMobileNav() {
    this.toggleMenuService.toggleMenu();
    this.toggleMenuService.onMenuToggled(this.isMobileMenuOpen);
    this.menuToggled.emit(this.toggleMenuService.isMobileMenuOpen);
  }
  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
}
