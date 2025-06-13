import { Injectable } from '@angular/core';
import {
  AngularFireAuth
} from "@angular/fire/compat/auth";

import firebase
  from "firebase/compat/app";
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
import {
  Router
} from "@angular/router";
import {
  Observable, of, take
} from "rxjs";
import {
  map,
  switchMap
} from "rxjs/operators";
import User = firebase.User;
import {
  UserService
} from "../../../services/user.service";

@Injectable({
  providedIn: 'root'
})
export class GoogleAuthService {

  constructor(private afAuth: AngularFireAuth,  private router: Router, private userService: UserService) {}






  async signInWithGoogle() {
    try {
      console.log('Initiating google sign in...')
      await this.afAuth.signInWithPopup(new GoogleAuthProvider());

      //this.router.navigate(['/dashboard']); // Redirect to dashboard or any desired page after successful login
    } catch (error) {
      console.error('Error signing in with Google:', error);
      // Handle error or redirect to an error page
    }
  }

  async signOut() {
    await this.afAuth.signOut().then(() => {
      console.log('User signed out successfully');
      this.router.navigate(['/login']); // Redirect to login or another page after sign out
    }).catch((error) => {
      console.error('Error signing out:', error);
    });
  }

  // signInWithGoogle() {
  //   return this.afAuth.signInWithPopup(new GoogleAuthProvider());
  // }

  isAuthenticated(): Observable<boolean> {
    return this.afAuth.authState.pipe(
      take(1), // Take only one emission to complete the observable
      map(user => {
        const isAuthenticated = !!user; // Convert user to a boolean value
        if (!isAuthenticated) {
          console.log('Redirecting to login...');
          this.router.navigate(['/login']); // Redirect to the login page if not authenticated
        }

        return isAuthenticated;

      })
    );
  }



  // Example method to get user data
  // getUserData(): Observable<any> {
  //   return this.afAuth.authState.pipe(
  //     switchMap((user) => {
  //       if (user) {
  //         // User is signed in, return user data
  //         return of(user);
  //       } else {
  //         // User is not signed in, redirect to login page
  //         this.router.navigate(['/login']);
  //         return of(null);
  //       }
  //     })
  //   );
  // }


}
