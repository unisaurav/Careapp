import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ActionSheetController } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { PresciptionsPage } from '../presciptions/presciptions';
import { AppointmentPage } from '../appointment/appointment';

/**
 * Generated class for the HealthchartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-healthchart',
  templateUrl: 'healthchart.html',
})
export class HealthchartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HealthchartPage');
  }
  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Menu',
      buttons: [
        {
         text: 'DashBoard',
         icon:'speedometer',
          handler: () => {
    
            this.navCtrl.push(DashboardPage)
          }
        },{
          text: 'Health Chart',
          icon:'pulse',
          handler: () => {
            this.navCtrl.push(HealthchartPage)

          }
        },
        {
          text: 'Presciptions',
          icon:'clipboard',
          handler: () => {
            this.navCtrl.setRoot(PresciptionsPage);
          }},
          {
            text: 'Appointment',
            icon:'stopwatch',
            handler: () => {
              this.navCtrl.setRoot(AppointmentPage);
            }},
          {
            text: 'Payment',
            icon:'card',
            handler: () => {
              this.navCtrl.setRoot(AppointmentPage);
            }},
            {
              text: 'Insurance',
              icon:'medkit',
              handler: () => {
                this.navCtrl.setRoot(AppointmentPage);
              }},
          {
          text: 'Cancel',
          role: 'cancel',
          icon:'close',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
