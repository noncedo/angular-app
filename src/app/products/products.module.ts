import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductListComponent } from '../product-list/product-list.component';




@NgModule({
  declarations: [
    ProductListComponent,
   ProductDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductListComponent,
    ProductDetailComponent

  ]
})
export class ProductsModule { }
