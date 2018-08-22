import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { File } from '@ionic-native/file';

import { FirebaseApp } from '../../../node_modules/angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';
import { Post } from '../home/post';

import { UserProvider } from '../../providers/user/user';
import { AuthService } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-add-post',
  templateUrl: 'add-post.html',
})
export class AddPostPage {
  description: string;
  url: any;
  imageContainer: any;
  imageURI: any;
  imageURL: any = "/assets/imgs/profile.png";
  imageFileName: any;
  files: any[];
  isFinished: string = 'no';
  error: any;
  info: any;
  testy: any;
  event: any;
  selectedFile: any = null;
  downloadURL: any;
  userInfo: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public viewCtrl: ViewController,
    public file: File,
    private afStorage: AngularFireStorage,
    private db: AngularFireDatabase,
    public auth: AuthService
  ) {
    this.userInfo = this.auth.customUser;
  }

  onFileSelect(event) {
    this.selectedFile = event.target.files[0];
    this.imageURL = this.selectedFile.name;

    this.uploadFile(this.selectedFile);
  }

  uploadFile(file) {
    const randomID = Math.random().toString(36).substring(2);
    let ref = this.afStorage.ref(randomID);
    ref.put(file).then(info => {
      this.downloadURL = this.afStorage.ref('/' + info.metadata.name).getDownloadURL().subscribe(url => {
        this.downloadURL = url;
        this.createPost(url, info.metadata.name);
      });
    });
  }

  createPost(url, name) {
    // const items = this.db.list('posts');
    // let newItem: Post = {
    //   comment_count: 0,
    //   description: "Post from Website",
    //   image: url,
    //   like_count: 1,
    //   post_date: "November, 20, 2018",
    //   title: name,
    //   u_id: 1,
    //   u_image: url,
    //   u_name: "AndrewSomething"
    // }

    // items.push(newItem);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
