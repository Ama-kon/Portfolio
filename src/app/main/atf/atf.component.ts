import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-atf',
  standalone: true,
  imports: [NavbarComponent, ContactComponent],
  templateUrl: './atf.component.html',
  styleUrl: './atf.component.scss',
})
export class AtfComponent {}
