import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-clienti',
  standalone: true,
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.css'],
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientiComponent {
  readonly slides = [
    {
      img: 'images/4.png',
      alt: 'Creilab.com',
      title: 'Creilab.com',
      subtitle: 'portfolio artistico',
      category: 'Creilab',
      tags: [
        'visibilità online per supportare i clienti nella scelta dei personaggi per sand tray therapy',
        'aggiunta di nuove proposte rapida ed efficiente'
      ],
      quote: 'Mi serviva una vetrina semplice ed intuitiva per mostrare le mie miniature ai clienti. Risposta rapida e perfettamente corrispondente alle mie aspettative.'
    },
    {
      img: 'images/5.png',
      alt: 'Studio Bettinelli e Pampallona',
      title: 'Studio Bettinelli E Pampallona',
      subtitle: 'psicologia e psicomotricità',
      category: 'Studio',
      tags: [
        'cresceremo insieme al progetto delle nostre clienti',
        'sviluppo rapido per partire insieme'
      ],
      quote: 'Il nostro neonato studio aveva bisogno di farsi conoscere e di farsi trovare da chi ha bisogno del nostro aiuto. Ottima collaborazione!'
    },
    {
      img: 'images/3.png',
      alt: 'JungleFit',
      title: 'JungleFit',
      subtitle: 'Palestra',
      category: 'Palestra e Fitness',
      tags: [
        'sito d\'impatto',
        'sviluppato per evidenziare le caratteristiche dell\'offerta del cliente'
      ],
      quote: 'Si è trattato di un restyling di un sito già esistente e non più accattivante, una nuova veste che ci ha stimolato a cercare novità da offrire.'
    }
  ];

  readonly currentIndex = signal(0);

  goTo(index: number): void {
    this.currentIndex.set((index + this.slides.length) % this.slides.length);
  }

  prev(): void { this.goTo(this.currentIndex() - 1); }
  next(): void { this.goTo(this.currentIndex() + 1); }
}
