import { NgModule } from "@angular/core";
import { ChartComponentexport, ChartStakeComponentexport} from "./chart.temp";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@NgModule({
   exports: [ChartComponentexport],
   declarations: [ChartComponentexport],
   imports: [NgxChartsModule],
   providers: []
})
export class ChartModule {
}



@NgModule({
   exports: [ChartStakeComponentexport],
   declarations: [ChartStakeComponentexport],
   imports: [NgxChartsModule, CanvasJSAngularChartsModule],
   providers: []
})
export class ChartStakeModule {
}