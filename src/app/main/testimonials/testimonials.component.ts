import { Component } from '@angular/core';
import { Testimonial } from '../../interfaces/testimonials.interface';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      name: 'Nuria N.',
      project: 'people-status-1',
      opinion: 'testimonial-1',
    },
    {
      name: 'Michael B.',
      project: 'people-status-2',
      opinion: 'testimonial-2',
    },
  ];
}
