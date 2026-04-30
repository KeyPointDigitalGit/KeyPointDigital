
import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  imports: [NgFor]
})
export class CardComponent {
  @Input() icon = '';
  @Input() title = '';
  @Input() items: string[] = [];
}
