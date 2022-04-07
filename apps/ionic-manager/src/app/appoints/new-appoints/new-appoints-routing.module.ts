import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewAppointsPage } from './new-appoints.page';

const routes: Routes = [
  {
    path: '',
    component: NewAppointsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewAppointsPageRoutingModule {}
