import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot, UrlTree
} from "@angular/router";
import {
  GoogleAuthService
} from "./services/google-auth.service";
import {
  Observable
} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GoogleAuthGuardService implements CanActivate {
  constructor(private authService: GoogleAuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isAuthenticated();
  }
}
