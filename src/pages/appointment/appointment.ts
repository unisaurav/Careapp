import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ActionSheetController } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { HealthchartPage } from '../healthchart/healthchart';
import { PresciptionsPage } from '../presciptions/presciptions';


/**
 * Generated class for the AppointmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-appointment',
  templateUrl: 'appointment.html',
})
export class AppointmentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentPage');
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
