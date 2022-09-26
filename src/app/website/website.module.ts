import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { WebsiteComponent } from './website.component';
import { DetalleComponent } from './detalle/detalle.component';


@NgModule({
  declarations: [
    WebsiteComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule
  ]
})
export class WebsiteModule { }
