import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';

import { AddPostPage } from '../pages/add-post/add-post';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ProfilePage } from '../pages/profile/profile';
import { PostsPage } from '../pages/posts/posts';
import { AuthenticationPage } from '../pages/authentication/authentication';

import { FIREBASE_CONFIG } from './firebase.credentials';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { AdMobFree } from '@ionic-native/admob-free';

import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { FileChooser } from '../../node_modules/@ionic-native/file-chooser';
import { Camera } from '@ionic-native/camera';
import { HttpClientModule } from '@angular/common/http';

// Remove plugins I don't need when done.
import { FilePath } from '@ionic-native/file-path';
import { UserProvider } from '../providers/user/user';
import { DataProvider } from '../providers/data/data';
import { AuthService } from '../providers/auth/auth';
import { CommentProvider } from '../providers/comment/comment';
import { LikeProvider } from '../providers/like/like';
import { PostProvider } from '../providers/post/post';
import { SubProvider } from '../providers/sub/sub';
import { TagProvider } from '../providers/tag/tag';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddPostPage,
    LoginPage,
    RegisterPage,
    ProfilePage,
    PostsPage,
    AuthenticationPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddPostPage,
    LoginPage,
    RegisterPage,
    ProfilePage,
    PostsPage,
    AuthenticationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AdMobFree,
    AngularFireAuth,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    File,
    FileChooser,
    FileTransfer,
    FileTransferObject,
    FilePath,
    Camera,
    DataProvider,
    UserProvider,
    AuthService,
    CommentProvider,
    LikeProvider,
    PostProvider,
    SubProvider,
    TagProvider
  ]
})
export class AppModule {}
