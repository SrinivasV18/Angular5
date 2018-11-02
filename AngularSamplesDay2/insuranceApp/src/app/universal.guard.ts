import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { LogoutComponent } from './logout/logout.component';

@Injectable({
  providedIn: 'root'
})
export class UniversalGuard implements CanActivate, CanDeactivate<LogoutComponent> {
  canDeactivate(component: any, currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean {
    const url = currentState.url;//currentRoute.url;
    
    let result = window.confirm('Are you sure...');
    if(!result){
      //this.router.navigate(['/products']);
      result = true;
    }
    return result;
  }

  constructor(private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    //console.log()
    if (sessionStorage.getItem('logged') === 'true') {
      return true;
    }
    else {
      this.router.navigate(['/login', 'Logged User can access this page...']);
      return false;
    }
  }


}
