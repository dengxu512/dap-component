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
    path: 'tree',
    data: ['tree'],
    loadChildren:
      './components/+tree/demo-tree.module#DemoTreeModule'
  },
  {
    path: '**',
    redirectTo: '/'
  }
];
