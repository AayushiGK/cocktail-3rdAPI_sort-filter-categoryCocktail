import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import {DataTableModule} from 'angular-6-datatable';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxPaginationModule,
    DataTableModule
  ],
  exports:[]
})
export class CocktailsModule { }
