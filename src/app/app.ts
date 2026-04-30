import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChatWidgetComponent } from './components/chat-widget/chat-widget.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, ChatWidgetComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
