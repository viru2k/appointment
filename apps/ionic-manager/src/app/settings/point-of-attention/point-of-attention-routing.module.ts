import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { POAPage } from './point-of-attention.page';

const routes: Routes = [
  {
    path: '',
    component: POAPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class POAPageRoutingModule {}
