import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss',
})
export class SkillSetComponent {
  skills = [
    'angular',
    'typescript',
    'javascript',
    'html',
    'scrum',
    'firebase',
    'git',
    'css',
    'api',
    'material-design',
  ];
}
