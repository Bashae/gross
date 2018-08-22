import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;
import { Observable } from '../../../node_modules/rxjs';

@Injectable()
export class PostProvider {
  posts: AngularFirestoreCollection<any>;

  constructor(
    private db: AngularFirestore
  ) {}

  getAllPosts() {
    this.db.collection("posts")
      .valueChanges()
      .subscribe(res => {
        this.posts = res;
        console.log(this.posts);
        return this.posts;
    });
  }

  getPost() {

  }

  updatePost() {

  }

  deletePost() {

  }

}
