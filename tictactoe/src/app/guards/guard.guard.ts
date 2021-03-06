import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean{
    if(localStorage.getItem('userToken') != null) {
      return true;
    }
    this.router.navigate(['/login'])
    return false;
  }

}
