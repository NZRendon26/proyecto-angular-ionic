import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'usertlist',
    loadChildren: () => import('./usertlist/usertlist.module').then( m => m.UsertlistPageModule)
  },
  {
    path: 'perfil-personaje/:id',
    loadChildren: () => import('./perfil-personaje/perfil-personaje.module').then( m => m.PerfilPersonajePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
