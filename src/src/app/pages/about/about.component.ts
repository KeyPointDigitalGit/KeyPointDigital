import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {}
