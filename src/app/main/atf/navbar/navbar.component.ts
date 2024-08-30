import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MobileNavbarComponent } from '../mobile-navbar/mobile-navbar.component';
import { ToggleMenuService } from '../../../services/toggle-menu.service';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MobileNavbarComponent,
    TranslateModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Input() isMobileMenuOpen: boolean = false;
  @Output() menuToggled = new EventEmitter<boolean>();
  constructor(
    private toggleMenuService: ToggleMenuService,
    private translate: TranslateService
  ) {}
  toggleMobile() {
    this.toggleMenuService.toggleMenu();
    this.menuToggled.emit(this.toggleMenuService.isMobileMenuOpen);
  }
  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
}
