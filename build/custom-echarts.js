import * as echarts from "../src/export/core";
import { use } from "../src/extension";
import { BarChart, LineChart, PieChart } from "../src/export/charts";
import {
    GridComponent,
    TooltipComponent,
    LegendComponent,
} from "../src/export/components";
import { CanvasRenderer } from "../src/export/renderers";

use([
    BarChart,
    LineChart,
    PieChart,
    GridComponent,
    TooltipComponent,
    LegendComponent,
    CanvasRenderer,
]);

export default echarts;
