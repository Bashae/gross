import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;
import { Observable } from '../../../node_modules/rxjs';

@Injectable()
export class AuthService {
  public user: firebase.User;
  public state: any;
  public customUser: AngularFirestoreDocument<any>;
  item: Observable<any>;

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore
  ) {
    this.afAuth.authState.subscribe(user => {
      this.user = user;
      this.state = user;
    });
  }

  signInWithEmail(credentials) {
    this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(user => {
        console.log('should run set user');
        this.setUser(user);
      })
      .catch(err => {
        console.log(err);
      });
  }

  signUpWithEmail(credentials) {
    this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then(user => {
        this.setUser(user);
      })
      .catch(err => {
        console.log(err);
      });
  }

  setUser(user) {
    this.user = user;
    let id = user.user.uid;
    this.db.doc<any>('users/' + id).valueChanges().subscribe(user => {
      this.customUser = user;
    });
  }

}
