import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  loginfun(){
    this.navCtrl.push(LoginPage);
  }
  signupfun(){
    this.navCtrl.push(SignupPage); 
  }
}
