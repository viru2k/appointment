import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PendingAppointsPage } from './pending-appoints.page';

const routes: Routes = [
  {
    path: '',
    component: PendingAppointsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PendingAppointsPageRoutingModule {}
