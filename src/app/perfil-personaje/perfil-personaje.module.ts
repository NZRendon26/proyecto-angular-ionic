import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPersonajePageRoutingModule } from './perfil-personaje-routing.module';

import { PerfilPersonajePage } from './perfil-personaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPersonajePageRoutingModule
  ],
  declarations: [PerfilPersonajePage]
})
export class PerfilPersonajePageModule {}
