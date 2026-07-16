# Apache ECharts

<a href="https://echarts.apache.org/">
    <img style="vertical-align: top;" src="./asset/logo.png?raw=true" alt="logo" height="50px">
</a>

Apache ECharts is a free, powerful charting and visualization library offering easy ways to add intuitive, interactive, and highly customizable charts to your commercial products. It is written in pure JavaScript and based on <a href="https://github.com/ecomfe/zrender">zrender</a>, which is a whole new lightweight canvas library.

**[中文官网](https://echarts.apache.org/zh/index.html)** | **[ENGLISH HOMEPAGE](https://echarts.apache.org/en/index.html)**

[![License](https://img.shields.io/npm/l/echarts?color=5470c6)](https://github.com/apache/echarts/blob/master/LICENSE) [![Latest npm release](https://img.shields.io/npm/v/echarts?color=91cc75)](https://www.npmjs.com/package/echarts) [![NPM downloads](https://img.shields.io/npm/dm/echarts.svg?label=npm%20downloads&style=flat&color=fac858)](https://www.npmjs.com/package/echarts) [![Contributors](https://img.shields.io/github/contributors/apache/echarts?color=3ba272)](https://github.com/apache/echarts/graphs/contributors)

[![Build Status](https://github.com/apache/echarts/actions/workflows/ci.yml/badge.svg)](https://github.com/apache/echarts/actions/workflows/ci.yml)

## Get Apache ECharts

You may choose one of the following methods:

+ Download from the [official website](https://echarts.apache.org/download.html)
+ `npm install echarts --save`
+ CDN: [jsDelivr CDN](https://www.jsdelivr.com/package/npm/echarts?path=dist)

## Docs

+ [Get Started](https://echarts.apache.org/handbook)
+ [API](https://echarts.apache.org/api.html)
+ [Option Manual](https://echarts.apache.org/option.html)
+ [Examples](https://echarts.apache.org/examples)

## Get Help

+ [GitHub Issues](https://github.com/apache/echarts/issues) for bug report and feature requests
+ Email [dev@echarts.apache.org](mailto:dev@echarts.apache.org) for general questions
+ Subscribe to the [mailing list](https://echarts.apache.org/maillist.html) to get updated with the project

## Build

Build echarts source code:

Execute the instructions in the root directory of the echarts:
([Node.js](https://nodejs.org) is required)

```shell
# Install the dependencies from NPM:
npm install

# Rebuild source code immediately in watch mode when changing the source code.
# It opens the `./test` directory, and you may open `-cases.html` to get the list
# of all test cases.
# If you wish to create a test case, run `npm run mktest:help` to learn more.
npm run dev

# Check the correctness of TypeScript code.
npm run checktype

# If intending to build and get all types of the "production" files:
npm run release
```

Then the "production" files are generated in the `dist` directory.

### Custom Build (自定义打包)

通过 `index.custom.js` 配置文件，可以只打包需要的模块，减小产物体积。

**配置文件：** `index.custom.js`

当前包含的模块：

| 类型 | 模块 | 说明 |
|------|------|------|
| 渲染器 | `CanvasRenderer` | Canvas 渲染引擎 |
| 图表 | `LineChart` | 折线图 |
| 图表 | `BarChart` | 柱状图 |
| 图表 | `PieChart` | 饼图 |
| 组件 | `GridComponent` | 直角坐标系（含 xAxis/yAxis） |
| 组件 | `TooltipComponent` | 提示框 |
| 组件 | `LegendComponent` | 图例 |

**打包命令：**

```shell
node build/build.js --type custom --format esm --min
```

**参数说明：**

| 参数 | 值 | 说明 |
|------|----|------|
| `--type` | `custom` | 使用根目录 `index.custom.js` 作为入口 |
| `--format` | `esm` | 输出 ES Module 格式（也支持 `umd`、`cjs`、`iife`） |
| `--min` | - | 同时生成压缩版（`.min.js`） |

**产物文件（生成在 `dist/` 目录）：**

| 文件 | 说明 |
|------|------|
| `echarts.esm.custom.js` | ESM 未压缩版（含 sourcemap） |
| `echarts.esm.custom.min.js` | ESM 压缩版（生产使用） |
| `echarts.esm.custom.mjs` | ESM 未压缩版（`.mjs` 扩展名，兼容 webpack5/Node.js） |
| `echarts.esm.custom.min.mjs` | ESM 压缩版（`.mjs` 扩展名） |

**使用示例：**

```js
import * as echarts from './dist/echarts.esm.custom.min.js';

const chart = echarts.init(document.getElementById('main'));
chart.setOption({
    tooltip: {},
    legend: { data: ['销量'] },
    xAxis: { data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'] },
    yAxis: {},
    series: [{ name: '销量', type: 'bar', data: [5, 20, 36, 10, 10, 20] }]
});
```

**如需添加更多模块，** 编辑 `index.custom.js`，参照 `index.common.js` 的格式从 `./lib/` 中导入并注册即可。

## Contribution

Please refer to the [contributing](https://github.com/apache/echarts/blob/master/CONTRIBUTING.md) document if you wish to debug locally or make pull requests.

## Resources

### Awesome ECharts

[https://github.com/ecomfe/awesome-echarts](https://github.com/ecomfe/awesome-echarts)

### Extensions

+ [ECharts GL](https://github.com/ecomfe/echarts-gl) An extension pack of ECharts, which provides 3D plots, globe visualization, and WebGL acceleration.

+ [Liquidfill 水球图](https://github.com/ecomfe/echarts-liquidfill)

+ [Wordcloud 字符云](https://github.com/ecomfe/echarts-wordcloud)

+ [Extension for Baidu Map 百度地图扩展](https://github.com/apache/echarts/tree/master/extension-src/bmap) An extension provides a wrapper of Baidu Map Service SDK.

+ [vue-echarts](https://github.com/ecomfe/vue-echarts) ECharts component for Vue.js

+ [echarts-stat](https://github.com/ecomfe/echarts-stat) Statistics tool for ECharts

## License

ECharts is available under the Apache License V2.

## Code of Conduct

Please refer to [Apache Code of Conduct](https://www.apache.org/foundation/policies/conduct.html).

## Paper

Deqing Li, Honghui Mei, Yi Shen, Shuang Su, Wenli Zhang, Junting Wang, Ming Zu, Wei Chen.
[ECharts: A Declarative Framework for Rapid Construction of Web-based Visualization](https://www.sciencedirect.com/science/article/pii/S2468502X18300068).
Visual Informatics, 2018.
