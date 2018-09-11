import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'ng-tree',
  templateUrl: './ng-tree.component.html',
  styleUrls: ['./ng-tree.component.scss']
})
export class NgTreeComponent implements OnInit {

  @Input() id: string;
  @Input()
  set treeNodes(value: any[]) {
    this._treeNodes = value;
    this.initTree();
  }
  get treeNodes(): any[] {
    return this._treeNodes;
  }
  @Input() treeSetting: any;
  @Input() checkAble: boolean;
  @Input() checkStyle: string;
  @Input() simpleData: {
    enable: boolean,
    idKey: string,
    pIdKey: string,
    rootPId: string|null
  };
  @Input() selectedMulti: boolean;
  @Input() showIcon: boolean;
  @Input() showLine: boolean;
  @Input() addDiyDom: any[];
  @Input() addHoverDom: any[];
  @Input() dblClickExpand: boolean;

  @Output() beforeClick: EventEmitter<any> = new EventEmitter();
  @Output() beforeCheck: EventEmitter<any> = new EventEmitter();
  @Output() beforeRemove: EventEmitter<any> = new EventEmitter();
  @Output() beforeRename: EventEmitter<any> = new EventEmitter();
  @Output() onClick: EventEmitter<any> = new EventEmitter();
  @Output() onCheck: EventEmitter<any> = new EventEmitter();
  @Output() onRemove: EventEmitter<any> = new EventEmitter();
  @Output() onRename: EventEmitter<any> = new EventEmitter();

  treeObject: any;
  private _treeNodes: any[];

  constructor() { }

  ngOnInit() {
    const that = this;
    const treeSetting: any = {};
    if (this.checkAble !== undefined) {
      treeSetting.check = {
        enable: this.checkAble,
        chkStyle: this.checkStyle ? this.checkStyle : 'checkbox'
      };
    }

    if (this.simpleData) {
      treeSetting.data = {
        simpleData: this.simpleData
      };
    }

    if (this.selectedMulti !== undefined) {
      treeSetting.view = {
        selectedMulti: this.selectedMulti
      };
    }

    if (this.showIcon !== undefined) {
      treeSetting.view = treeSetting.view ? treeSetting.view : {};
      treeSetting.view.showIcon = this.showIcon;
    }

    if (this.showLine !== undefined) {
      treeSetting.view = treeSetting.view ? treeSetting.view : {};
      treeSetting.view.showLine = this.showLine;
    }

    if (this.dblClickExpand !== undefined) {
      treeSetting.view = treeSetting.view ? treeSetting.view : {};
      treeSetting.view.dblClickExpand = this.dblClickExpand;
    }

    if (this.addDiyDom) {
      treeSetting.view = treeSetting.view ? treeSetting.view : {};
      treeSetting.view.showLine = this.showLine;
    }

    if (this.addHoverDom) {
      treeSetting.view = treeSetting.view ? treeSetting.view : {};
      treeSetting.view.showLine = this.showLine;
    }

    if (!(this.treeSetting && this.treeSetting.callback && this.treeSetting.callback.beforeClick)) {
      treeSetting.callback = treeSetting.callback ? treeSetting.callback : {};
      treeSetting.callback.beforeClick = ( treeId: string, node: any ): boolean => {
        that.beforeClick.emit(node);
        return true;
      };
    }

    if (!(this.treeSetting && this.treeSetting.callback && this.treeSetting.callback.beforeCheck)) {
      treeSetting.callback = treeSetting.callback ? treeSetting.callback : {};
      treeSetting.callback.beforeCheck = ( treeId: string, node: any ): boolean => {
        that.beforeCheck.emit(node);
        return true;
      };
    }

    if (!(this.treeSetting && this.treeSetting.callback && this.treeSetting.callback.beforeRemove)) {
      treeSetting.callback = treeSetting.callback ? treeSetting.callback : {};
      treeSetting.callback.beforeRemove = ( treeId: string, node: any ): boolean => {
        that.beforeRemove.emit(node);
        return true;
      };
    }

    if (!(this.treeSetting && this.treeSetting.callback && this.treeSetting.callback.beforeRename)) {
      treeSetting.callback = treeSetting.callback ? treeSetting.callback : {};
      treeSetting.callback.beforeRename = ( treeId: string, node: any ): boolean => {
        that.beforeRename.emit(node);
        return true;
      };
    }

    if (!(this.treeSetting && this.treeSetting.callback && this.treeSetting.callback.onClick)) {
      treeSetting.callback = treeSetting.callback ? treeSetting.callback : {};
      treeSetting.callback.onClick = (event: any, treeId: string, node: any) => {
        that.onClick.emit(node);
      };
    }

    if (!(this.treeSetting && this.treeSetting.callback && this.treeSetting.callback.onCheck)) {
      treeSetting.callback = treeSetting.callback ? treeSetting.callback : {};
      treeSetting.callback.onCheck = (event: any, treeId: string, node: any) => {
        that.onCheck.emit(node);
      };
    }

    if (!(this.treeSetting && this.treeSetting.callback && this.treeSetting.callback.onRemove)) {
      treeSetting.callback = treeSetting.callback ? treeSetting.callback : {};
      treeSetting.callback.onRemove = (event: any, treeId: string, node: any) => {
        that.onRemove.emit(node);
      };
    }

    if (!(this.treeSetting && this.treeSetting.callback && this.treeSetting.callback.onRename)) {
      treeSetting.callback = treeSetting.callback ? treeSetting.callback : {};
      treeSetting.callback.onRename = (event: any, treeId: string, node: any) => {
        that.onRename.emit(node);
      };
    }

    this.treeSetting = Object.assign({}, this.treeSetting, treeSetting);

    // this.treeObject = $.fn.zTree.init($('#' + this.id), treeSetting, this.treeNodes);
  }

  ngAfterViewInit() {
    this.treeObject = $.fn.zTree.init($('#' + this.id), this.treeSetting, this._treeNodes);
  }

  ngOnDestroy() {
    this.treeObject.destroy();
  }

  getTreeObj(): any {
    return this.treeObject;
  }

  initTree() {
    if (this.treeObject) {
      this.treeObject.destroy();
    }
    this.treeObject = $.fn.zTree.init($('#' + this.id), this.treeSetting, this._treeNodes);
  }
}
