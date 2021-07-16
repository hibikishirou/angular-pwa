import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { MatCardModule } from '@angular/material/card';
import { OrderRoutingRoutes } from './order-routing.routing';
import { ProductItemComponent } from './components/product-item/product-item.component';

@NgModule({
  imports: [
    CommonModule,
    OrderRoutingRoutes,
    MatCardModule,
  ],
  declarations: [
    OrderComponent,
    ProductItemComponent
  ]
})
export class OrderModule { }
