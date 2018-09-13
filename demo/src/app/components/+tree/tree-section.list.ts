import { DemoDropdownBasicComponent } from './demos/basic/basic';
import { DemoDropdownCheckboxComponent } from './demos/checkbox/checkbox';
import { DemoDropdownRadioComponent } from './demos/radio/radio';
import { DemoDropdownHoverComponent } from './demos/hover/hover';

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
    name: '使用',
    anchor: 'usage',
    outlet: DemoTopSectionComponent,
    content: {
      doc: require('!!raw-loader?lang=typescript!./docs/usage.md')
    }
  },
  {
    name: '示例',
    anchor: 'examples',
    outlet: ExamplesComponent,
    description: `<p>基于ztree的树，配置项全部遵循ztree的设置，可以快捷设置也可以自定义</p>`,
    content: [
      {
        title: '基本用法',
        anchor: 'basic',
        component: require('!!raw-loader?lang=typescript!./demos/basic/basic.ts'),
        html: require('!!raw-loader?lang=markup!./demos/basic/basic.html'),
        description: `<p>构造一个最简单的树</p>`,
        outlet: DemoDropdownBasicComponent
      },
      {
        title: '带checkbox的树',
        anchor: 'checkbox',
        component: require('!!raw-loader?lang=typescript!./demos/checkbox/checkbox.ts'),
        html: require('!!raw-loader?lang=markup!./demos/checkbox/checkbox.html'),
        description: `<p>带checkbox的树</p>`,
        outlet: DemoDropdownCheckboxComponent
      },
      {
        title: '带radio的树',
        anchor: 'radio',
        component: require('!!raw-loader?lang=typescript!./demos/radio/radio.ts'),
        html: require('!!raw-loader?lang=markup!./demos/radio/radio.html'),
        description: `<p>带radio的树</p>`,
        outlet: DemoDropdownRadioComponent
      },
      {
        title: '带hover菜单的树',
        anchor: 'hover',
        component: require('!!raw-loader?lang=typescript!./demos/hover/hover.ts'),
        html: require('!!raw-loader?lang=markup!./demos/hover/hover.html'),
        description: `<p>带hover菜单的树</p>`,
        outlet: DemoDropdownHoverComponent
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
