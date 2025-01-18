import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-feature-2024',
  imports: [
    CommonModule,
  ],
  templateUrl: './feature-2024.component.html',
  styleUrl: './feature-2024.component.css',
  standalone: true
})
export class Feature2024Component {
  positionArea = [
    ['top center','top span-left','top span-right','top'],
    ['center left','center right','center'],
    ['bottom center','bottom span-left','bottom span-right','bottom'],
    ['left top','left center','left bottom','left'],
    ['right top','right center','right bottom','right']
  ];
  position = 'top right';
}
