import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthlayoutComponent } from './layouts/authlayout/authlayout.component';
import { DashboardlayoutComponent } from './layouts/dashboardlayout/dashboardlayout.component';
import { WebsitelayoutComponent } from './layouts/websitelayout/websitelayout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'website',
    pathMatch: 'full',
  },
  {
    path: '',
    component: WebsitelayoutComponent,
    children: [
      {
        path: 'website',
        loadChildren: () =>
          import('./website/website.module').then((m) => m.WebsiteModule),
      },
    ],
  },
  {
    path: '',
    component: AuthlayoutComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () =>
          import('./auth/auth.module').then((m) => m.AuthModule),
      },
    ],
  },
  {
    path: '',
    component: DashboardlayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
    ],
  },

  {
    path: 'register',
    loadChildren: () =>
      import('./register/register.module').then((m) => m.RegisterModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
