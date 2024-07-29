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
        'Amalia is very organized at work and never loses her calm. Additionally, she was always very polite and fully dedicated to her team.',
    },
    {
      name: 'test N.',
      project: 'Project Join',
      opinion:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, laborum perferendis. Quaerat laboriosam dolor labore voluptatibus perferendis distinctio quo dolorum ab, voluptas aliquid nemo temporibus voluptate voluptates consectetur fuga accusamus.',
    },
  ];
}
