import { Component } from '@angular/core';
import { SignupPage } from '../signup/signup';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { DashboardPage } from '../dashboard/dashboard';
import { AppointmentPage } from '../appointment/appointment';
import { HealthchartPage } from '../healthchart/healthchart';
import { NavController,ActionSheetController,NavParams } from 'ionic-angular';
import { PresciptionsPage } from '../presciptions/presciptions';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  email:string;
  token:Observable<any>;
  f_name:String;
  tab1Root = DashboardPage;
  tab2Root = AppointmentPage;
  tab3Root = HealthchartPage;
  title:String="hello";


  constructor(public navParams:NavParams,public navCtrl: NavController,public actionSheetCtrl: ActionSheetController,public httpClient:HttpClient) {
     this.email = navParams.get('data');
    // let toast;
    this.token = this.httpClient.get('http://127.0.0.1:8000/api/profile/?search='+this.email)  
     this.token.subscribe(data=>{
    //   console.log('my data: ', data);
      this.email = data;
     this.title=this.email[0]['first_name'];
    //   console.log(this.title);

    //   // this.f_name=this.email[0]['first_name'];
    //   // this.title="tabTitle="+this.f_name.toString;
      
    }, error => {
    //       console.log("are bhai galat ho gaya")
     })
   

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
