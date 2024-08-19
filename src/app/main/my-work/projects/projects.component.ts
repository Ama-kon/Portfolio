import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../interfaces/project.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  constructor() {}

  projects: Project[] = [
    {
      img: 'assets/img/projects/join-project-icon.png',
      title: 'Join',
      stack: 'Angular | TypeScript | HTML | CSS | Firebase',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      github: 'https://github.com/CodeRacon/join',
      live: '',
    },
    {
      img: 'assets/img/projects/sharkie-project-icon.png',
      title: 'Sharkie',
      stack: 'JavaScript | HTML | CSS',
      description:
        'Swim and throw bubbles in this game based on an object-oriented approach. Help Sharkie find coins and poison bottles to fight against the ocean enemies',
      github: 'https://github.com/Ama-kon/Sharkie',
      live: '',
    },
    {
      img: 'assets/img/projects/pokedex-project-icon.png',
      title: 'Pokedex',
      stack: 'JavaScript | HTML | CSS | Api',
      description:
        'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      github: 'https://github.com/Ama-kon/Pokedex',
      live: '',
    },
  ];
}
