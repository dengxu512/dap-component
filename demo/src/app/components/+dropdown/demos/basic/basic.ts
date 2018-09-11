import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-dropdown-basic',
  templateUrl: './basic.html'
})
export class DemoDropdownBasicComponent implements OnInit {
  treeNodes = [];
  simpleData = {
    enable: true,
    idKey: 'id',
    pIdKey: 'pId'
  };

  ngOnInit() {
    setTimeout(() => {
      this.treeNodes = [
        {'id': 1, 'pId': 0, 'name': 'test1'},
        {'id': 11, 'pId': 1, 'name': 'test11'},
        {'id': 12, 'pId': 1, 'name': 'test12'},
        {'id': 111, 'pId': 11, 'name': 'test111'}
      ];
    }, 500);
  }
}
