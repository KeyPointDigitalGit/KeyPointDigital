import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../src/app/pages/home/home.component').then((module) => module.HomeComponent)
  },
  {
    path: 'servizi',
    loadComponent: () => import('../src/app/pages/servizi/servizi.component').then((module) => module.ServiziComponent)
  },
  {
    path: 'chi-siamo',
    loadComponent: () => import('../src/app/pages/about/about.component').then((module) => module.AboutComponent)
  },
  {
    path: 'clienti',
    loadComponent: () => import('../src/app/pages/clienti/clienti.component').then((module) => module.ClientiComponent)
  },
  {
    path: 'contatti',
    loadComponent: () => import('../src/app/pages/contact/contact.component').then((module) => module.ContactComponent)
  },
  {
    path: 'privacy',
    loadComponent: () => import('../src/app/pages/privacy/privacy.component').then((module) => module.PrivacyComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];