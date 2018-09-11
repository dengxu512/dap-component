import { DemoDropdownBasicComponent } from './demos/basic/basic';
import { DemoAccessibilityComponent } from './demos/accessibility/accessibility';

import { ContentSection } from '../../docs/models/content-section.model';
import { DemoTopSectionComponent } from '../../docs/demo-section-components/demo-top-section/index';
import { ExamplesComponent } from '../../docs/demo-section-components/demo-examples-section/index';
import { ApiSectionsComponent } from '../../docs/demo-section-components/demo-api-section/index';

import {
  NgApiDocComponent,
  NgApiDocConfigComponent
} from '../../docs/api-docs';


export const demoComponentContent: ContentSection[] = [
  {
    name: 'Usage',
    anchor: 'usage',
    outlet: DemoTopSectionComponent,
    content: {
      doc: require('!!raw-loader?lang=typescript!./docs/usage.md')
    }
  },
  {
    name: 'Examples',
    anchor: 'examples',
    outlet: ExamplesComponent,
    description: `<p>Wrap the dropdown’s toggle (your button or link) and the dropdown menu within
      <code>dropdown</code>. Dropdowns can be triggered from <code> &lt;a&gt;</code> or <code> &lt;button&gt;</code>
      elements to better fit your potential needs.</p>`,
    content: [
      {
        title: 'Basic',
        anchor: 'basic',
        component: require('!!raw-loader?lang=typescript!./demos/basic/basic.ts'),
        html: require('!!raw-loader?lang=markup!./demos/basic/basic.html'),
        description: `<p>Any <code>&lt;button&gt;</code> can became a dropdown toggle with few markup changes.
          Here’s how dropdown works with single button</p>`,
        outlet: DemoDropdownBasicComponent
      },
      {
        title: 'Accessibility',
        anchor: 'accessibility',
        outlet: DemoAccessibilityComponent
      }
    ]
  },
  {
    name: 'API Reference',
    anchor: 'api-reference',
    outlet: ApiSectionsComponent,
    content: [
      {
        title: 'NgTreeComponent',
        anchor: 'ng-tree',
        outlet: NgApiDocComponent
      },
    ]
  }
];
