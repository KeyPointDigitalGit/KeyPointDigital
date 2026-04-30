
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiziComponent } from './pages/servizi/servizi.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'servizi', component: ServiziComponent },
];
