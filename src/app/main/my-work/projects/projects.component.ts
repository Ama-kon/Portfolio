import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../interfaces/project.interface';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule],
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
      description: 'join-text',
      github: 'https://github.com/CodeRacon/join',
      live: 'https://join.amalia-konstantinidou.de',
    },
    {
      img: 'assets/img/projects/sharkie-project-icon.png',
      title: 'Sharkie',
      stack: 'JavaScript | HTML | CSS',
      description: 'sharkie-text',
      github: 'https://github.com/Ama-kon/Sharkie',
      live: 'https://sharkie.amalia-konstantinidou.de',
    },
    {
      img: 'assets/img/projects/pokedex-project-icon.png',
      title: 'Pokedex',
      stack: 'JavaScript | HTML | CSS | Api',
      description: 'pokedex-text',
      github: 'https://github.com/Ama-kon/Pokedex',
      live: 'https://pokedex.amalia-konstantinidou.de/',
    },
  ];
}
