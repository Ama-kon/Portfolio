import { Component } from '@angular/core';
import { Testimonial } from '../../interfaces/testimonials.interface';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      name: 'Nuria N.',
      project: 'Employee at Amalthea',
      opinion:
        'Amalia is very organized at work and never loses her calm. She always stays polite and is fully dedicated to her team. Her positive attitude and friendly nature make her great to work with. I would be happy to work with her again.',
    },
    {
      name: 'Michael B.',
      project: 'Project Join',
      opinion:
        'Amalia is an absolute asset to every team with her communicative and friendly manner. She keeps focus and remains cool-headed in stressful situations. On top of that, she is also very good at breaking down complex issues in an understandable and clear way. Her style of coding is just the same: easy to follow, precise, clean. It was a true pleasure working with her!',
    },
  ];
}
