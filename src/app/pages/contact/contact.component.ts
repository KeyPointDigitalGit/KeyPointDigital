import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
  readonly faqs = [
    { q: 'Quanto tempo ci vuole per realizzare un sito web?', a: 'I tempi variano in base alla complessità del progetto. Un sito vetrina può essere consegnato in 2-3 settimane, mentre soluzioni più articolate richiedono da 4 a 8 settimane. Partiamo sempre da un briefing dettagliato per definire i tempi esatti.' },
    { q: 'Posso gestire i contenuti del sito in autonomia?', a: 'Assolutamente sì. Realizziamo siti con sistemi di gestione dei contenuti (CMS) intuitivi che ti permettono di aggiornare testi, immagini e pagine senza competenze tecniche.' },
    { q: 'Offrite assistenza dopo la consegna del progetto?', a: 'Sì, offriamo piani di assistenza e manutenzione mensili per mantenere il tuo sito aggiornato, sicuro e performante. Puoi scegliere il pacchetto più adatto alle tue esigenze.' },
    { q: 'È possibile richiedere un preventivo gratuito?', a: 'Certamente! Puoi contattarci tramite il modulo qui sotto o chiamarci direttamente. Analizziamo le tue esigenze e ti prepariamo un preventivo personalizzato senza impegno.' },
    { q: 'Lavorate con attività di qualsiasi settore?', a: 'Sì, collaboriamo con imprese di tutti i settori: artigianato, professionisti, retail, ristorazione, servizi e molto altro. Ogni progetto è personalizzato in base al contesto specifico del cliente.' }
  ];

  readonly openIndex = signal(0);

  toggle(i: number): void {
    this.openIndex.set(this.openIndex() === i ? -1 : i);
  }

  readonly submitted = signal(false);

  handleSubmit(e: Event): void {
    e.preventDefault();
    this.submitted.set(true);
    setTimeout(() => this.submitted.set(false), 3000);
  }
}
