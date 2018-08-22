import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../../user.ts';

@Injectable()
export class UserProvider {
  currentUser: User;

  constructor(public http: HttpClient) {
  }

}
