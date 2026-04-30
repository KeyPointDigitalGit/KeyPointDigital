import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-chat-widget',
  standalone: true,
  templateUrl: './chat-widget.component.html',
  styleUrls: ['./chat-widget.component.css'],
  imports: [RouterLink]
})
export class ChatWidgetComponent {}
