import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecepiesPage } from './recepies.page';

const routes: Routes = [
  {
    path: '',
    component: RecepiesPage,
  },
  {
    path: ':recepieId',
    loadChildren: () =>
      import('./recepie-details/recepie-details.module').then(
        (m) => m.RecepieDetailsPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecepiesPageRoutingModule {}
