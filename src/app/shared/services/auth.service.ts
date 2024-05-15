import { Injectable } from '@angular/core';
import { Auth, onAuthStateChanged, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  UserData: any;

  constructor(public auth: Auth, public router: Router) {
    // Check if localStorage is available before using it
    if (typeof window !== 'undefined') {

      //To check if user is logged in or not
      onAuthStateChanged(this.auth, (user: any) => {
        if (user) {
          this.UserData = user;
          localStorage.setItem('user', JSON.stringify(this.UserData));
          JSON.parse(localStorage.getItem('user')!);
          console.error('Auth Local Storage Fix');
        } else {
          localStorage.setItem('user', 'null');
          JSON.parse(localStorage.getItem('user')!);
          console.log('Firebase Works');
          console.error('Auth Local Storage Fix');
        }

      });
    }
  }

    //get User
    //get Authenticated user from firebase
    getAuthFire(){
      return this.auth.currentUser;
    }


    signOut() {
      return this.auth.signOut();
    }

}
