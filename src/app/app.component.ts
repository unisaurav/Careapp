import { Component, ViewChild } from '@angular/core';
import { Platform ,Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';


import { HomePage } from '../pages/home/home';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { AppointmentPage } from '../pages/appointment/appointment';
import { PresciptionsPage } from '../pages/presciptions/presciptions';
import { HealthchartPage } from '../pages/healthchart/healthchart';
import { SignupPage } from '../pages/signup/signup';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  activePages:any;
  @ViewChild(Nav) nav :Nav;
  pages: Array<{title:string,icon:string, Component:any}>;
  icons: Array<{title:string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.pages=[{title:'Dashboard',icon:'star',Component:DashboardPage},
                {title:'Appointment',icon:'heart',Component:AppointmentPage},
                {title:'Presciptions',icon:'add', Component:PresciptionsPage},
                {title:'Health Chart',icon:'pulse', Component:HealthchartPage}];
                this.activePages=this.pages[0];
    // platform.ready().then(() => {
    //   // Okay, so the platform is ready and our plugins are available.
    //   // Here you can do any higher level native things you might need.
    //   statusBar.styleDefault();
    //   splashScreen.hide();
    // });
  }
  initializeApp(){
    this.platform.ready().then(()=>{
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

  }
  gotodashboard(Page){
    this.nav.setRoot(Page.Component);
    this.activePages=Page;
  }
  chechactive(Page){
    return Page==this.activePages;
  }
}

