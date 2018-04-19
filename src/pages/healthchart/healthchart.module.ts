import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HealthchartPage } from './healthchart';

@NgModule({
  declarations: [
    HealthchartPage,
  ],
  imports: [
    IonicPageModule.forChild(HealthchartPage),
  ],
})
export class HealthchartPageModule {}
