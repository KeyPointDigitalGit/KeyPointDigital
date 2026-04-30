import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../src/app/components/navbar/navbar.component';
import { FooterComponent } from '../src/app/components/footer/footer.component';
import { ChatWidgetComponent } from '../src/app/components/chat-widget/chat-widget.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, ChatWidgetComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
