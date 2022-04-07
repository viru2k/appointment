import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpicAppointsPage } from './epic-appoints.page';

const routes: Routes = [
  {
    path: '',
    component: EpicAppointsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EpicAppointsPageRoutingModule {}
