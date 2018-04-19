import { Component ,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  @ViewChild('firstname') first_name;
  @ViewChild('lastname') last_name;
  @ViewChild('mailid') email;
  @ViewChild('mobno') mobile_number;
  @ViewChild('pass1') password1;
  @ViewChild('pass2') password2;
  token:Observable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl:ToastController,public httpClient:HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signup_func(){   
    if(this.first_name.value==""||this.last_name==""||this.email.value==""||
    this.mobile_number.value==""||this.password1.value==""||this.password2.value==""){
        let toast = this.toastCtrl.create({
          message: 'Enter Signup details !',
          duration: 3000
        });
        toast.present();  
      }else if(!this.email.value.match(/\S+@\S+\.\S+/)){
        let toast = this.toastCtrl.create({
          message: "Invalid Email",
          duration: 3000
        });
        toast.present(); 
      }else if((this.mobile_number.value).length!=10){
        let toast = this.toastCtrl.create({
          message: "Mobile number should have 10 digit",
          duration: 3000
        });
        toast.present(); 
      }else if(this.password1.value.length<8){
        let toast = this.toastCtrl.create({
          message: "Use at least 8 characters!",
          duration: 3000
        });
        toast.present(); 
        } 
      else if(this.password1.value!=this.password2.value){
      let toast = this.toastCtrl.create({
        message: "These passwords don't match. Try again?",
        duration: 3000
      });
      toast.present(); 
      }
      else{
        let toast = this.toastCtrl.create({
          message: "Sucessfully Register",
          duration: 3000
        });
        var data = {
          first_name:this.first_name.value,
          last_name:this.last_name.value,
          email:this.email.value,
          phone_no:this.mobile_number.value,
          password:this.password1.value
        }
        this.token = this.httpClient.post('http://127.0.0.1:8000/api/profile/',data)
        this.token.subscribe(data1 => {
          console.log('my data: ', data1);
          toast.present(); 
          this.navCtrl.setRoot(HomePage)
        }, error => {
          console.log("error");
          
        })

      }

    }
    
}
