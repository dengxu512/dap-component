import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-dropdown-hover',
  templateUrl: './hover.html'
})
export class DemoDropdownHoverComponent implements OnInit {
  treeNodes = [
    {'id': 1, 'pId': 0, 'name': 'test1'},
    {'id': 11, 'pId': 1, 'name': 'test11'},
    {'id': 12, 'pId': 1, 'name': 'test12'},
    {'id': 111, 'pId': 11, 'name': 'test111'}
  ];
  simpleData = {
    enable: true,
    idKey: 'id',
    pIdKey: 'pId'
  };
  addHoverDom = [
    {key: 'rename', value: '重命名'},
    {key: 'delete', value: '删除'}
  ];

  ngOnInit() {
  }
}
