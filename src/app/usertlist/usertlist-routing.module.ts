import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsertlistPage } from './usertlist.page';

const routes: Routes = [
  {
    path: '',
    component: UsertlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsertlistPageRoutingModule {}
