import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from '../contact/contact.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-atf',
  standalone: true,
  imports: [NavbarComponent, ContactComponent, TranslateModule],
  templateUrl: './atf.component.html',
  styleUrl: './atf.component.scss',
})
export class AtfComponent {}
