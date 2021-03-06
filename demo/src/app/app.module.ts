import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgTreeModule } from 'ng-dap/ng-tree';

import { environment } from '../environments/environment';
import { ngdoc } from '../ng-api-doc';
import { AppComponent } from './app.component';
import { routes } from './app.routing';
import { GettingStartedComponent } from './common/getting-started/getting-started.component';
import { LandingComponent } from './common/landing/landing.component';
import { TopMenuComponent } from './common/top-menu/top-menu.component';
import { DocsModule } from './docs';
import { NgApiDoc } from './docs/api-docs/api-docs.model';
import { StyleManager } from './theme/style-manager';
import { ThemeStorage } from './theme/theme-storage';

@NgModule({
  declarations: [AppComponent, GettingStartedComponent, TopMenuComponent, LandingComponent],
  imports: [
    DocsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: environment.useHash }),
    NgxPageScrollModule,
    NgTreeModule,
    BrowserModule.withServerTransition({ appId: 'ng-dap' })
  ],
  providers: [ThemeStorage, StyleManager, { provide: NgApiDoc, useValue: ngdoc }],
  bootstrap: [AppComponent]
})
export class AppModule {}
