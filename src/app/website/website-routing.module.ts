import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { WebsiteComponent } from './website.component';

const routes: Routes = [
  { path: '', component: WebsiteComponent },
  { path: 'detalle/:id', component: DetalleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
