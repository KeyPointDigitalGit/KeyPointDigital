import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((module) => module.HomeComponent)
  },
  {
    path: 'servizi',
    loadComponent: () => import('./pages/servizi/servizi.component').then((module) => module.ServiziComponent)
  },
  {
    path: 'chi-siamo',
    loadComponent: () => import('./pages/about/about.component').then((module) => module.AboutComponent)
  },
  {
    path: 'clienti',
    loadComponent: () => import('./pages/clienti/clienti.component').then((module) => module.ClientiComponent)
  },
  {
    path: 'contatti',
    loadComponent: () => import('./pages/contact/contact.component').then((module) => module.ContactComponent)
  },
  {
    path: 'privacy',
    loadComponent: () => import('./pages/privacy/privacy.component').then((module) => module.PrivacyComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];