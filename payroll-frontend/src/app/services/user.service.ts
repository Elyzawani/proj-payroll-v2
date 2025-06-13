import { Injectable } from '@angular/core';
import {
  HttpClient
} from "@angular/common/http";
import {
  BehaviorSubject,
  Observable, of
} from "rxjs";
import {
  User
} from "../class/user";
import {
  environment
} from "../../environments/environment";
import {
  AngularFireAuth
} from "@angular/fire/compat/auth";
import {
  catchError, map,
  switchMap
} from "rxjs/operators";
import {
  CoStaff,
  UserInfo
} from "../class/user-info";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  staffID: any;
  userData: User = new User;

  private userInfoSubject = new BehaviorSubject<UserInfo | null>(null);
  userInfo$ = this.userInfoSubject.asObservable();

  constructor(private http: HttpClient, private afAuth: AngularFireAuth) {


  }

  getUserInfo(staffid: String): Observable<UserInfo> {
    return this.http.get<any>(
      `${environment.baseUrl}/staff/general/allinfo/${staffid}`
    ).pipe(
      map((data: any) => new UserInfo(data))
    );
  }

  // getUserInfo(staffid: string): Observable<UserInfo> {
  //   return this.http.get<any>(
  //     `${environment.baseUrl}/staff/general/allinfo/${staffid}`
  //   ).pipe(
  //     map((data: any) => {
  //       const userInfo = new UserInfo(data);
  //       this.setUserInfo(userInfo); // Set user info in the service
  //       return userInfo;
  //     })
  //   );
  // }

  setUserInfo(userInfo: UserInfo): void {
    this.userInfoSubject.next(userInfo);
  }

  getUserInfoRelated(staffid : String): Observable<User> {
    return this.http.get<User>(
      `${environment.baseUrl}/staff/general/${staffid}`
    );
  }

  getUserData(): Observable<User | null> {
    return this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          console.log('User data:', user.email, user.displayName, user.photoURL);
          return this.getLoginData(user.email).pipe(
            catchError(error => {
              console.error('Error fetching login data:', error);
              return of(null);
            })
          );
        } else {
          console.log('No user signed in');
          return of(null);
        }
      })
    );
  }


  getLoginData(email: any){
    //console.log(this.http.get<any>(`${environment.baseUrl}/staff/general/byemail/${email}`));
    return this.http.get<any>(`${environment.baseUrl}/staff/general/byemail/${email}`
    );
  }

  async setUserData(user: User): Promise<void> {
    console.log('aaaa :'+user.imageUrl)

    this.userData = user;
  }

  getUserDatax(): User {
    console.log('from getuserdata:'+this.userData.department)
    return this.userData;
  }

  getBasicInfo(staffid: string | undefined): Observable<CoStaff> {
    return this.http.get<any>(
      `${environment.baseUrl}/staff/general/${staffid}`
    ).pipe(
      map((data: any) => new CoStaff(data))
    );
  }

  clearUserData(): void {
    //this.userData = null;
  }
}
