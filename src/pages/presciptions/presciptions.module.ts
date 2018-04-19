import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PresciptionsPage } from './presciptions';

@NgModule({
  declarations: [
    PresciptionsPage,
  ],
  imports: [
    IonicPageModule.forChild(PresciptionsPage),
  ],
})
export class PresciptionsPageModule {}
