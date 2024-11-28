import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
// import { JwtHelperService } from '@auth0/angular-jwt';

export const authGuard: CanActivateFn = (route, state) => {
  
  const router = inject(Router);

  if (isAuthenticated()) {
    return true;
  } else {
    localStorage.clear();
    router.navigateByUrl('/login');
    return false;
  }




  function isAuthenticated(): boolean {
    // const jwtHelper = new JwtHelperService();
    let token!: string | null;
    token = localStorage.getItem('token');
    if (token) {
      // return !jwtHelper.isTokenExpired(token);
      return true
    } else {
      return false;
    }
  }
  
};

