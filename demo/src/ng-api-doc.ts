/* tslint:disable */
export const ngdoc: any = {
  "NgTreeComponent": {
    "fileName": "src/ng-tree/ng-tree.component.ts",
    "className": "NgTreeComponent",
    "description": "",
    "selector": "ng-tree",
    "inputs": [
      {
        "name": "addDiyDom",
        "type": "[{ key: string; value: string; }]",
        "description": "<p>用于在节点上固定显示用户自定义控件，设置此项会覆盖treeSetting.view.addDiyDom，\n数据格式和ztree不同，为{key: string,value: string}</p>\n"
      },
      {
        "name": "addHoverDom",
        "type": "[{ key: string; value: string; }]",
        "description": "<p>用于当鼠标移动到节点上时，显示用户自定义控件,设置此项会覆盖treeSetting.view.addHoverDom，\n数据格式和ztree不同，为{key: string,value: string}</p>\n"
      },
      {
        "name": "checkAble",
        "type": "boolean",
        "description": "<p>是否显示选择框，设置此项会覆盖treeSetting.check.enable,默认显示checkbox</p>\n"
      },
      {
        "name": "checkStyle",
        "type": "string",
        "description": "<p>选择框类型，设置此项会覆盖treeSetting.check.chkStyle,可选值：checkbox|radio</p>\n"
      },
      {
        "name": "dblClickExpand",
        "type": "boolean",
        "description": "<p>双击节点时，是否自动展开父节点的标识,设置此项会覆盖treeSetting.view.dblClickExpand</p>\n"
      },
      {
        "name": "id",
        "type": "string",
        "description": "<p>组件id</p>\n"
      },
      {
        "name": "selectedMulti",
        "type": "boolean",
        "description": "<p>设置是否允许同时选中多个节点,设置此项会覆盖treeSetting.view.selectedMulti</p>\n"
      },
      {
        "name": "showIcon",
        "type": "boolean",
        "description": "<p>设置 zTree 是否显示节点的图标。设置此项会覆盖treeSetting.view.showIcon</p>\n"
      },
      {
        "name": "showLine",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "simpleData",
        "type": "{ enable: boolean; idKey: string; pIdKey: string; rootPId: string; }",
        "description": "<p>简单数据模式，设置此项不需要组织树结构，使用有父子关系的数组即可，设置此项会覆盖\ntreeSetting.data.simpleData.enable，\n{\n   enable: boolean,//是否使用简单数据模式\n   idKey: string,//节点id对应的字段\n   pIdKey: string,//父节点id对应的字段\n   rootPId: string|null//根节点id的值\n}</p>\n"
      },
      {
        "name": "treeNodes",
        "type": "any[]",
        "description": "<p>树数据，结构同ztree</p>\n"
      },
      {
        "name": "treeSetting",
        "type": "any",
        "description": "<p>树的配置项，结构同ztree</p>\n"
      }
    ],
    "outputs": [
      {
        "name": "beforeCheck",
        "description": "<p>用于捕获 勾选 或 取消勾选 之前的事件回调函数，并且根据返回值确定是否允许 勾选 或 取消勾选,设置此项会覆盖treeSetting.callback.beforeCheck，\n参数为当前勾选 或 取消勾选的节点</p>\n"
      },
      {
        "name": "beforeClick",
        "description": "<p>用于捕获单击节点之前的事件回调函数，并且根据返回值确定是否允许单击操作,设置此项会覆盖treeSetting.callback.beforeClick，\n参数为当前点击节点</p>\n"
      },
      {
        "name": "beforeRemove",
        "description": "<p>用于捕获节点被删除之前的事件回调函数，并且根据返回值确定是否允许删除操作,设置此项会覆盖treeSetting.callback.beforeRemove，\n参数为当前要删除的节点</p>\n"
      },
      {
        "name": "beforeRename",
        "description": "<p>用于捕获节点编辑名称结束（Input 失去焦点 或 按下 Enter 键）之后，更新节点名称数据之前的事件回调函数，并且根据返回值确定是否允许更改名称的操作,设置此项会覆盖treeSetting.callback.beforeRename，\n参数为当前要更名的节点</p>\n"
      },
      {
        "name": "onCheck",
        "description": "<p>用于捕获 checkbox / radio 被勾选 或 取消勾选的事件回调函数，设置此项会覆盖treeSetting.callback.onCheck</p>\n"
      },
      {
        "name": "onClick",
        "description": "<p>用于捕获节点被点击的事件回调函数，设置此项会覆盖treeSetting.callback.onClick</p>\n"
      },
      {
        "name": "onHoverDomClick",
        "description": "<p>用于当鼠标移动到节点上时，点击用户自定义控件时触发的事件，参数为addHoverDom内的元素{key: string, value: string}</p>\n"
      },
      {
        "name": "onRemove",
        "description": "<p>用于捕获删除节点之后的事件回调函数。设置此项会覆盖treeSetting.callback.onRemove</p>\n"
      },
      {
        "name": "onRename",
        "description": "<p>用于捕获节点编辑名称结束之后的事件回调函数，设置此项会覆盖treeSetting.callback.onRename</p>\n"
      }
    ],
    "properties": [
      {
        "name": "treeNodes",
        "type": "any[]",
        "description": "<p>树数据，结构同ztree</p>\n"
      },
      {
        "name": "treeObject",
        "type": "any",
        "description": "<p>当前树实例对象</p>\n"
      }
    ],
    "methods": []
  },
  "NgTranscludeDirective": {
    "fileName": "src/tabs/ng-transclude.directive.ts",
    "className": "NgTranscludeDirective",
    "description": "",
    "selector": "[ngTransclude]",
    "inputs": [
      {
        "name": "ngTransclude",
        "type": "TemplateRef<any>",
        "description": ""
      }
    ],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "TabHeadingDirective": {
    "fileName": "src/tabs/tab-heading.directive.ts",
    "className": "TabHeadingDirective",
    "description": "<p>Should be used to mark <ng-template> element as a template for tab heading </p>\n",
    "selector": "[tabHeading]",
    "inputs": [],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "TabDirective": {
    "fileName": "src/tabs/tab.directive.ts",
    "className": "TabDirective",
    "description": "",
    "selector": "tab, [tab]",
    "inputs": [
      {
        "name": "active",
        "type": "boolean",
        "description": "<p>tab active state toggle </p>\n"
      },
      {
        "name": "customClass",
        "type": "string",
        "description": "<p>if set, will be added to the tab&#39;s class attribute. Multiple classes are supported. </p>\n"
      },
      {
        "name": "disabled",
        "type": "boolean",
        "description": "<p>if true tab can not be activated </p>\n"
      },
      {
        "name": "heading",
        "type": "string",
        "description": "<p>tab header text </p>\n"
      },
      {
        "name": "id",
        "type": "string",
        "description": "<p>tab id. The same id with suffix &#39;-link&#39; will be added to the corresponding &lt;li&gt; element  </p>\n"
      },
      {
        "name": "removable",
        "type": "boolean",
        "description": "<p>if true tab can be removable, additional button will appear </p>\n"
      }
    ],
    "outputs": [
      {
        "name": "deselect",
        "description": "<p>fired when tab became inactive, $event:Tab equals to deselected instance of Tab component </p>\n"
      },
      {
        "name": "removed",
        "description": "<p>fired before tab will be removed, $event:Tab equals to instance of removed tab </p>\n"
      },
      {
        "name": "select",
        "description": "<p>fired when tab became active, $event:Tab equals to selected instance of Tab component </p>\n"
      }
    ],
    "properties": [],
    "methods": []
  },
  "TabsetComponent": {
    "fileName": "src/tabs/tabset.component.ts",
    "className": "TabsetComponent",
    "description": "",
    "selector": "tabset",
    "inputs": [
      {
        "name": "justified",
        "type": "boolean",
        "description": "<p>if true tabs fill the container and have a consistent width </p>\n"
      },
      {
        "name": "type",
        "type": "string",
        "description": "<p>navigation context class: &#39;tabs&#39; or &#39;pills&#39; </p>\n"
      },
      {
        "name": "vertical",
        "type": "boolean",
        "description": "<p>if true tabs will be placed vertically </p>\n"
      }
    ],
    "outputs": [],
    "properties": [],
    "methods": []
  },
  "TabsetConfig": {
    "fileName": "src/tabs/tabset.config.ts",
    "className": "TabsetConfig",
    "description": "",
    "methods": [],
    "properties": [
      {
        "name": "type",
        "defaultValue": "tabs",
        "type": "string",
        "description": "<p>provides default navigation context class: &#39;tabs&#39; or &#39;pills&#39; </p>\n"
      }
    ]
  }
};
