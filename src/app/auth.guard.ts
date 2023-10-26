import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuardNotLogged: CanActivateFn = (route, state) => {
  const userData = localStorage.getItem("userData")
  const router = inject(Router);
  if (!userData) {
    return true;
  }

  router.navigate(["home"]);
  return false;

};


export const authGuardIsAdmin : CanActivateFn = (route, state)=>{
  const userData = localStorage.getItem("userData")
  const router = inject(Router);
  const userObj = JSON.parse(userData);
  if (!userObj?.isAdmin) {
    return true;
  }

  router.navigate(["home"]);
  return false;
}