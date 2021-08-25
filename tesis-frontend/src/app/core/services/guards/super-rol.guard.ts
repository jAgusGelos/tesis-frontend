import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuperRolGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const idToken = localStorage.getItem('id_token');
    if (!idToken){
      this.router.navigate(['/login']);
    }
    else{
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(idToken);
      if (decodedToken.rol.includes(0) ) {
        return true;
      }
      return false;
    }

  }
  constructor(private router: Router) {}
}

