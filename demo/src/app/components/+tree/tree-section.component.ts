import { ChangeDetectionStrategy, Component } from '@angular/core';

import { demoComponentContent } from './tree-section.list';
import { ContentSection } from '../../docs/models/content-section.model';

@Component({
  selector: 'dropdown-section',
  templateUrl: './tree-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeSectionComponent {
  name = 'tree';
  src = 'https://github.com/valor-software/ngx-bootstrap/tree/development/src/dropdown';
  componentContent: ContentSection[] = demoComponentContent;
}
