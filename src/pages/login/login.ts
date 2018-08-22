import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth/auth';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../../pages/home/home';

import * as firebase from 'firebase/app';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private auth: AuthService,
    private afAuth: AngularFireAuth
  ) {
  }

  attemptLogin() {
    let credentials = {
      email: this.email,
      password: this.password
    };

    this.auth.signInWithEmail(credentials);
    if ( this.afAuth.user ) {
      this.navCtrl.push(HomePage)
    }
  }

}
