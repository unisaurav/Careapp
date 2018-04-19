import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import {DashboardPage} from '../pages/dashboard/dashboard';
import {AppointmentPage} from '../pages/appointment/appointment';
import {HealthchartPage} from '../pages/healthchart/healthchart';
import {ForgotpasswordPage} from '../pages/forgotpassword/forgotpassword';
import { PresciptionsPage } from '../pages/presciptions/presciptions';
import {PaymentPage} from '../pages/payment/payment';
import { TabsPage } from '../pages/tabs/tabs';
import {HttpClientModule} from '@angular/common/http'




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    ForgotpasswordPage,
    DashboardPage,
    AppointmentPage,
    HealthchartPage,
    PresciptionsPage,
    PaymentPage,
    TabsPage
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    ForgotpasswordPage,
    DashboardPage,
    AppointmentPage,
    HealthchartPage,
    PresciptionsPage,
    PaymentPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
