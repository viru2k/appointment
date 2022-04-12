import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'private',
    component: TabsPage,
    children: [
      {
        path: 'appoints',
        loadChildren: () =>
          import('../appoints/new-appoints/new-appoints.module').then(
            (m) => m.NewAppointsPageModule
          ),
      },
      {
        path: 'pending',
        loadChildren: () =>
          import('../appoints/pending-appoints/pending-appoints.module').then(
            (m) => m.PendingAppointsPageModule
          ),
      },
      {
        path: 'epic',
        loadChildren: () =>
          import('../appoints/epic-appoints/epic-appoints.module').then(
            (m) => m.EpicAppointsPageModule
          ),
      },
      {
        path: 'settings/profile',
        loadChildren: () =>
          import('../settings/profile/profile.module').then(
            (m) => m.ProfilePageModule
          ),
      },
      {
        path: 'settings/users',
        loadChildren: () =>
          import('../settings/users/user-list/user-list.module').then(
            (m) => m.UserListPageModule
          ),
      },
      {
        path: 'settings/poa',
        loadChildren: () =>
          import(
            '../settings/point-of-attention/point-of-attention.module'
          ).then((m) => m.POAPageModule),
      },
      {
        path: 'settings/sector',
        loadChildren: () =>
          import('../settings/sector/sector.module').then(
            (m) => m.SectorPageModule
          ),
      },
      {
        path: 'settings/modules',
        loadChildren: () =>
          import('../settings/permission/permission.module').then(
            (m) => m.PermissionsPageModule
          ),
      },
      {
        path: '',
        redirectTo: '/private/appoints',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/private/appoints',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
