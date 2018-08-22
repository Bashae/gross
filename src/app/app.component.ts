import { Component } from '@angular/core';
import { Platform, ModalController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AddPostPage} from '../pages/add-post/add-post';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ProfilePage } from '../pages/profile/profile';

import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;
import { AuthService } from '../providers/auth/auth';

import { AuthenticationPage } from '../pages/authentication/authentication';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  user:any;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen, 
    public modalCtrl: ModalController,
    private afAuth: AngularFireAuth,
    private auth: AuthService
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.user = this.afAuth.user;
    });
  }

  toggleModal() {
    let modal = this.modalCtrl.create(AddPostPage);
    if ( !this.auth.user ) {
      modal = this.modalCtrl.create(AuthenticationPage);
    }
    modal.present();
  }

  openPage(page) {
    if(!page) {return false;}

    if(page === 'home') {
      this.rootPage = HomePage;
    }

    if(page === "login") {
      if (this.auth.user) {
        return false;
      }
      this.rootPage = LoginPage;
    }

    if(page === "register") {
      if (this.auth.user) {
        return false;
      }
      this.rootPage = RegisterPage;
    }

    if(page === "profile") {
      this.rootPage = ProfilePage;
    }

    if(page === "logout") {
      this.afAuth.auth.signOut();
    }
  }
}

