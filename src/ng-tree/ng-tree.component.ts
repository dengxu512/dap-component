import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'ng-tree',
  templateUrl: './ng-tree.component.html',
  styleUrls: ['./ng-tree.component.scss']
})
export class NgTreeComponent implements OnInit {

  /**
   * 组件id
   */
  @Input() id: string;

  /**
   * 树数据，结构同ztree
   */
  @Input()
  set treeNodes(value: any[]) {
    this._treeNodes = value;
    this.initTree();
  }
  get treeNodes(): any[] {
    return this._treeNodes;
  }

  /**
   * 树的配置项，结构同ztree
   */
  @Input() treeSetting: any;

  /**
   * 是否显示选择框，设置此项会覆盖treeSetting.check.enable,默认显示checkbox
   */
  @Input() checkAble: boolean;

  /**
   * 选择框类型，设置此项会覆盖treeSetting.check.chkStyle,可选值：checkbox|radio
   */
  @Input() checkStyle: string;

  /**
   * 简单数据模式，设置此项不需要组织树结构，使用有父子关系的数组即可，设置此项会覆盖
   * treeSetting.data.simpleData.enable，
   * {
   *   enable: boolean,//是否使用简单数据模式
   *   idKey: string,//节点id对应的字段
   *   pIdKey: string,//父节点id对应的字段
   *   rootPId: string|null//根节点id的值
   * }
   */
  @Input() simpleData: {
    enable: boolean,
    idKey: string,
    pIdKey: string,
    rootPId: string|null
  };

  /**
   * 设置是否允许同时选中多个节点,设置此项会覆盖treeSetting.view.selectedMulti
   */
  @Input() selectedMulti: boolean;

  /**
   * 设置 zTree 是否显示节点的图标。设置此项会覆盖treeSetting.view.showIcon
   */
  @Input() showIcon: boolean;

  /***
   * 设置 zTree 是否显示节点之间的连线。设置此项会覆盖treeSetting.view.showLine
   */
  @Input() showLine: boolean;

  /**
   * 用于在节点上固定显示用户自定义控件，设置此项会覆盖treeSetting.view.addDiyDom，
   * 数据格式和ztree不同，为{key: string,value: string}
   */
  @Input() addDiyDom: [{
    key: string,
    value: string
  }];

  /**
   * 用于当鼠标移动到节点上时，显示用户自定义控件,设置此项会覆盖treeSetting.view.addHoverDom，
   * 数据格式和ztree不同，为{key: string,value: string}
   */
  @Input() addHoverDom: [{
    key: string,
    value: string
  }];

  /**
   * 双击节点时，是否自动展开父节点的标识,设置此项会覆盖treeSetting.view.dblClickExpand
   */
  @Input() dblClickExpand: boolean;

  /**
   * 用于捕获单击节点之前的事件回调函数，并且根据返回值确定是否允许单击操作,设置此项会覆盖treeSetting.callback.beforeClick，
   * 参数为当前点击节点
   */
  @Output() beforeClick: EventEmitter<any> = new EventEmitter();

  /**
   * 用于捕获 勾选 或 取消勾选 之前的事件回调函数，并且根据返回值确定是否允许 勾选 或 取消勾选,设置此项会覆盖treeSetting.callback.beforeCheck，
   * 参数为当前勾选 或 取消勾选的节点
   */
  @Output() beforeCheck: EventEmitter<any> = new EventEmitter();

  /**
   * 用于捕获节点被删除之前的事件回调函数，并且根据返回值确定是否允许删除操作,设置此项会覆盖treeSetting.callback.beforeRemove，
   * 参数为当前要删除的节点
   */
  @Output() beforeRemove: EventEmitter<any> = new EventEmitter();

  /**
   * 用于捕获节点编辑名称结束（Input 失去焦点 或 按下 Enter 键）之后，更新节点名称数据之前的事件回调函数，并且根据返回值确定是否允许更改名称的操作,设置此项会覆盖treeSetting.callback.beforeRename，
   * 参数为当前要更名的节点
   */
  @Output() beforeRename: EventEmitter<any> = new EventEmitter();

  /**
   * 用于捕获节点被点击的事件回调函数，设置此项会覆盖treeSetting.callback.onClick
   */
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  /**
   * 用于捕获 checkbox / radio 被勾选 或 取消勾选的事件回调函数，设置此项会覆盖treeSetting.callback.onCheck
   */
  @Output() onCheck: EventEmitter<any> = new EventEmitter();

  /**
   * 用于捕获删除节点之后的事件回调函数。设置此项会覆盖treeSetting.callback.onRemove
   */
  @Output() onRemove: EventEmitter<any> = new EventEmitter();

  /**
   * 用于捕获节点编辑名称结束之后的事件回调函数，设置此项会覆盖treeSetting.callback.onRename
   */
  @Output() onRename: EventEmitter<any> = new EventEmitter();

  /**
   * 用于当鼠标移动到节点上时，点击用户自定义控件时触发的事件，参数为addHoverDom内的元素{key: string, value: string}
   */
  @Output() onHoverDomClick: EventEmitter<any> = new EventEmitter();

  /**
   * 当前树实例对象
   */
  treeObject: any;
  private _treeNodes: any[];
  private hoverDomFunction = (treeId: string, treeNode: any) => {
    if ($('#diyBtn_' + treeNode.tId).length > 0) {
      return;
    }
    const hoverButton = $('#' + treeNode.tId + '_a');
    const editStr = '<span class="dropdown button" id="diyBtn_' + treeNode.tId + '" title="操作"></span>';
    hoverButton.append(editStr);
    const btn = $('#diyBtn_' + treeNode.tId);
    let dropDom = '<ul class="copy-movelist">';
    for (let i = 0; i < this.addHoverDom.length; i++) {
      dropDom += '<li id="' + this.addHoverDom[i].key + '">' + this.addHoverDom[i].value + '</li>';
    }
    dropDom += '</ul>';
    if (btn) {
      btn.on('click', () => {
        btn.html(dropDom);
        $('body').off('click').on('click', (ev: any) => {
          if (!($(ev.target).hasClass('dropdown') || $(ev.target).parents('.dropdown').length > 0)) {
            btn.empty();
          }
        });
        btn.find('ul').on('click', (ev: any) => {
          this.onHoverDomClick.emit(ev);
        });
        return false;
      });
    }
  }
  private removeHoverDomFunction = (treeId: string, treeNode: any) => {
    $('#diyBtn_' + treeNode.tId).unbind().remove();
  }

  constructor() { }

  ngOnInit() {
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

    if (this.addDiyDom && this.addDiyDom.length > 1) {
      treeSetting.view = treeSetting.view ? treeSetting.view : {};
    }

    if (this.addHoverDom) {
      treeSetting.view = treeSetting.view ? treeSetting.view : {};
      treeSetting.view.addHoverDom = this.hoverDomFunction;
      treeSetting.view.removeHoverDom = this.removeHoverDomFunction;
    }
    if (!(this.treeSetting && this.treeSetting.callback && this.treeSetting.callback.beforeClick)) {
      treeSetting.callback = treeSetting.callback ? treeSetting.callback : {};
      treeSetting.callback.beforeClick = ( treeId: string, node: any ): boolean => {
        this.beforeClick.emit(node);
        return true;
      };
    }

    if (!(this.treeSetting && this.treeSetting.callback && this.treeSetting.callback.beforeCheck)) {
      treeSetting.callback = treeSetting.callback ? treeSetting.callback : {};
      treeSetting.callback.beforeCheck = ( treeId: string, node: any ): boolean => {
        this.beforeCheck.emit(node);
        return true;
      };
    }

    if (!(this.treeSetting && this.treeSetting.callback && this.treeSetting.callback.beforeRemove)) {
      treeSetting.callback = treeSetting.callback ? treeSetting.callback : {};
      treeSetting.callback.beforeRemove = ( treeId: string, node: any ): boolean => {
        this.beforeRemove.emit(node);
        return true;
      };
    }

    if (!(this.treeSetting && this.treeSetting.callback && this.treeSetting.callback.beforeRename)) {
      treeSetting.callback = treeSetting.callback ? treeSetting.callback : {};
      treeSetting.callback.beforeRename = ( treeId: string, node: any ): boolean => {
        this.beforeRename.emit(node);
        return true;
      };
    }

    if (!(this.treeSetting && this.treeSetting.callback && this.treeSetting.callback.onClick)) {
      treeSetting.callback = treeSetting.callback ? treeSetting.callback : {};
      treeSetting.callback.onClick = (event: any, treeId: string, node: any) => {
        this.onClick.emit(node);
      };
    }

    if (!(this.treeSetting && this.treeSetting.callback && this.treeSetting.callback.onCheck)) {
      treeSetting.callback = treeSetting.callback ? treeSetting.callback : {};
      treeSetting.callback.onCheck = (event: any, treeId: string, node: any) => {
        this.onCheck.emit(node);
      };
    }

    if (!(this.treeSetting && this.treeSetting.callback && this.treeSetting.callback.onRemove)) {
      treeSetting.callback = treeSetting.callback ? treeSetting.callback : {};
      treeSetting.callback.onRemove = (event: any, treeId: string, node: any) => {
        this.onRemove.emit(node);
      };
    }

    if (!(this.treeSetting && this.treeSetting.callback && this.treeSetting.callback.onRename)) {
      treeSetting.callback = treeSetting.callback ? treeSetting.callback : {};
      treeSetting.callback.onRename = (event: any, treeId: string, node: any) => {
        this.onRename.emit(node);
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
