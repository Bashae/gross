import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';

@Injectable()
export class DataProvider {

  constructor(
    private db: AngularFireDatabase, 
    private afStorage: AngularFireStorage) {}

  // getFiles() {
  //   let ref = this.db.list('files');

  //   return ref.snapshotChanges().map(changes => {
  //     return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
  //   });
  // }

  uploadToStorage(information): AngularFireUploadTask {
    let newName = `${new Date().getTime()}.txt`;
    return this.afStorage.ref(`files/${newName}`).putString(information);
  }

  storeInfoToDatabase(metainfo) {
    
  }

  deleteFile(file) {
    let key = file.key;
    let storagePath = file.fullPath;

    // Remove entry from database
    this.db.list('files').remove(key);

    // Remove File from storage.
    return this.afStorage.ref(storagePath).delete();
  }

}
