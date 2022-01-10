import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilPersonajePage } from './perfil-personaje.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilPersonajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilPersonajePageRoutingModule {}
