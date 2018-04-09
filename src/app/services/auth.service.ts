import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {

  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(
    private firebaseAuth: AngularFireAuth, 
    private router: Router
  ) { 
    this.user = firebaseAuth.authState;

    this.user.subscribe((user) => {
      if (user) {
        this.userDetails = user;
        console.log(this.userDetails);
      } else {

      }
    })
  }

  signInWithGoogle() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
  }

}
