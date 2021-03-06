import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { MaterialModule } from '../material.module';
import { InventoryHomeComponent } from './inventory-home/inventory-home.component';
import { InventoryComponent } from './inventory.component';
import { StockEntryComponent } from './stock-entry/stock-entry.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
  declarations: [
    InventoryHomeComponent, 
    InventoryComponent, 
    StockEntryComponent, 
    ProductsComponent, 
    CategoriesComponent, 
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    MaterialModule
  ]
})
export class InventoryModule { }
