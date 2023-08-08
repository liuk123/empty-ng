# 低代码工具设计思路

## 一、数据

### 1、dataSrv.OrignData

- 以对象为单位，作为传入组件的参数。 禁止`array[0]`的方式传入。
- 赋值时，对象会修改原对象，数组会新建数组。原因：数组修改，不会引发变更。
- 数据选择时，isLeaf: true会终止后续的选择，往往以这个对象为最小传入单位。

## 二、组件参数
### 1、params

- 组件的固定参数，不进行数据绑定
#### (1)、ngcontents
ngcontents `<ng-content>`标签
label： 名称  
style： 内联样式  

```
"ngcontents": [
    {
        "label": "标题右侧",
        "style": {}
    },
    {
        "label": "body",
        "style": {
            "display": "flex",
            "flexDirection": "column"
        }
    }
]
```


### 2、styles 

```
"width": 736, // 宽度
"height": 288,  // 高度
"left": 28,  // x轴距离
"top": 104,  // y轴距离
"status": true,  // 激活状态
"alignX": "left", // 以左侧还是右侧为基准，left、right
"alignY": "top"  // 以上侧还是下侧为基准，top、bottom
```

## 三、组件开发

### 1、组件注册

- 首先在`module.ts`里注册组件，然后添加到`lib-comp.ts`中


### 2、开发原则

#### (1)、布局
- `width`、`height`用百分比，`padding`、`margin`、`font-size`用`em`
- 布局用`flex`

```
.list-table{
  height: 100%;
  display: flex;
  flex-direction: column;
  .tr{
    display: flex;
    height: 100%;
    justify-content: stretch;
    align-items: center;
    .td,.th{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      flex: 1 1 auto;
    }
  }
}
```

#### (2)、传参

- 确认固定参数和传入参数