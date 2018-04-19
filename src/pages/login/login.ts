import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import {Observable} from 'rxjs/Observable';
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
import { DashboardPage } from '../dashboard/dashboard';
import { TabsPage } from '../tabs/tabs';
import {HttpClient} from '@angular/common/http'


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild('email') email;
  @ViewChild('pass') password;
  token:Observable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams,public httpClient:HttpClient,public toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  
  }
  no_account(){
    this.navCtrl.push(SignupPage);
  }
  to_forgotfunc(){
    this.navCtrl.push(ForgotpasswordPage)
  }
  to_login(){
    if(this.email.value==""||this.password.value==""){
      let toast = this.toastCtrl.create({
        message: 'Enter the Details !',
        duration: 3000
      });
      toast.present();
     }
     else{
    let toast = this.toastCtrl.create({
      message: 'Invalid Email/Password',
      duration: 3000
    });
    var details = {
      username:this.email.value,
      password:this.password.value
    }
    this.token = this.httpClient.post('http://127.0.0.1:8000/api/login/',details)
    this.token.subscribe(data=>{
      console.log('my data: ', data);
      toast = this.toastCtrl.create({
        message: data.token,
        duration: 3000
      });
      console.log(this.email.value);
      
      this.navCtrl.push(TabsPage,{data:this.email.value});
      toast.present();
    }, error => {
      toast = this.toastCtrl.create({
        message: 'Invalid Email/Password',
        duration: 3000
      });
      toast.present();
     // console.log(data)
     
    })    
  }
  }

}
