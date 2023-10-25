import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const userData = localStorage.getItem("userData")
  const router = inject(Router);
  if (!userData) {
    return true;
  }

  router.navigate(["home"]);
  return false;

};
