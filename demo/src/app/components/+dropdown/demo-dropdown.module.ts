import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgTreeModule } from 'ng-dap/ng-tree';

import { DocsModule } from '../../docs';
import { DropdownSectionComponent } from './dropdown-section.component';
import { DEMO_COMPONENTS } from './demos';
import { routes } from './demo-dropdown.routes';

@NgModule({
  declarations: [
    DropdownSectionComponent,
    ...DEMO_COMPONENTS
  ],
  imports: [
    NgTreeModule,
    CommonModule,
    FormsModule,
    DocsModule,
    RouterModule.forChild(routes)
  ],
  exports: [DropdownSectionComponent],
  entryComponents: [...DEMO_COMPONENTS]
})
export class DemoDropdownModule {}
