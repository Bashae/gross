import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import { AuthService } from "../../providers/auth/auth";
import { PostProvider } from "../../providers/post/post";

import { Observable } from 'rxjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  posts: Observable<any[]>;
  likes: number;

  constructor(
    public navCtrl: NavController, 
    private db: AngularFireDatabase, 
    private afs: AngularFirestore,
    public auth: AuthService,
    private admob: AdMobFree,
    private post: PostProvider
  ) {
    this.getAllPosts();
    this.showBanner();
  }

  getAllPosts() {
    this.afs.collection("posts")
    .valueChanges()
    .subscribe(res => {
      this.posts = res;
      return this.posts;
    });
  }

  getPost() {

  }

  deletePost() {

  }

  likePost(post) {
    console.log(post.like_count);
  }

  loginNow() {
    this.userAuth.signInWithEmail().then(user => {
      console.log('loginnow ' + user)
    })
  }

  showBanner() {
    const bannerConfig: AdMobFreeBannerConfig = {
      id: "ca-app-pub-8071301998700750/8329030289",
      isTesting: true,
      autoShow: true,
    };

    this.admob.banner.config(bannerConfig);

    this.admob.banner.prepare()
      .then(() => {})
      .catch(e => console.log(e));
  }
}
