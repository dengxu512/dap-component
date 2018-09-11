import { LandingComponent } from './common/landing/landing.component';
import { GettingStartedComponent } from './common/getting-started/getting-started.component';

export const routes = [
  {
    path: '',
    data: ['Landing page'],
    component: LandingComponent
  },
  {
    path: 'getting-started',
    data: ['开始'],
    component: GettingStartedComponent
  },
  {
    path: 'dropdowns',
    data: ['tree'],
    // component: DropdownSectionComponent
    loadChildren:
      './components/+dropdown/demo-dropdown.module#DemoDropdownModule'
  },
  {
    path: '**',
    redirectTo: '/'
  }
];
