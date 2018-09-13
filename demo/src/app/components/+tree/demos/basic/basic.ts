import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-dropdown-basic',
  templateUrl: './basic.html'
})
export class DemoDropdownBasicComponent implements OnInit {
  treeNodes = {
    'name': 'test1',
    'children': [
      {'name': 'test11', 'children': [{'name': 'test111'}]},
      {'name': 'test12'}
      ]
  };

  ngOnInit() {
  }
}
