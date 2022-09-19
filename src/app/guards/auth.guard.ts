import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate, CanLoad {
  validador:boolean = false

  constructor(private router:Router,
    private toastr:ToastrService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem('token')=== 'true'){
        this.validador = true;
        return this.validador
      }
      this.toastr.info('You do not have access via url, please login');
      this.router.navigate(['auth/login']);
      return false;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem('token')=== 'true'){
        this.validador = true;
        return this.validador
      }
      this.toastr.info('You do not have access via url, please login');
      this.router.navigate(['auth/login']);
      return false;
  }
}
