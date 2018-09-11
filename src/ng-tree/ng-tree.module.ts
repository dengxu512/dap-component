import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgTreeComponent } from './ng-tree.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ NgTreeComponent ],
  exports: [ NgTreeComponent ]
})
export class NgTreeModule { }
