import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsertlistPageRoutingModule } from './usertlist-routing.module';

import { UsertlistPage } from './usertlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsertlistPageRoutingModule
  ],
  declarations: [UsertlistPage]
})
export class UsertlistPageModule {}
