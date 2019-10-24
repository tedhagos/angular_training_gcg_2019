import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {
  
  constructor(private route: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let retval = true;
      let id = parseInt(next.url[1].path);
      if(isNaN(id) || id < 1) {
        console.log("Invalid route");
        this.route.navigate(['/pagenotfound']);
        retval = false;
      }     
    return retval;
  }
}
