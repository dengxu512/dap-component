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
        "type": "any[]",
        "description": ""
      },
      {
        "name": "addHoverDom",
        "type": "any[]",
        "description": ""
      },
      {
        "name": "checkAble",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "checkStyle",
        "type": "string",
        "description": ""
      },
      {
        "name": "dblClickExpand",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "id",
        "type": "string",
        "description": ""
      },
      {
        "name": "selectedMulti",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "showIcon",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "showLine",
        "type": "boolean",
        "description": ""
      },
      {
        "name": "simpleData",
        "type": "{ enable: boolean; idKey: string; pIdKey: string; rootPId: string; }",
        "description": ""
      },
      {
        "name": "treeNodes",
        "type": "any[]",
        "description": ""
      },
      {
        "name": "treeSetting",
        "type": "any",
        "description": ""
      }
    ],
    "outputs": [
      {
        "name": "beforeCheck",
        "description": ""
      },
      {
        "name": "beforeClick",
        "description": ""
      },
      {
        "name": "beforeRemove",
        "description": ""
      },
      {
        "name": "beforeRename",
        "description": ""
      },
      {
        "name": "onCheck",
        "description": ""
      },
      {
        "name": "onClick",
        "description": ""
      },
      {
        "name": "onRemove",
        "description": ""
      },
      {
        "name": "onRename",
        "description": ""
      }
    ],
    "properties": [],
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
