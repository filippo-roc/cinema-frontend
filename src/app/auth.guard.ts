import { inject } from '@angular/core';
import { CanActivateFn, CanDeactivateFn, Router } from '@angular/router';
import { Injectable } from '@angular/core';

export const authGuardNotLogged: CanActivateFn = (route, state) => {
  const userData = localStorage.getItem("userData")
  const router = inject(Router);
  if (!userData) {
    return true;
  }

  router.navigate(["home"]);
  return false;

};

export const authGuardIsLogged: CanActivateFn = (route, state) => {
  const userData = localStorage.getItem("userData")
  const router = inject(Router);
  if (userData) {
    return true;
  }

  router.navigate(["home"]);
  return false;

};

export const confirmExitGuard: CanDeactivateFn<unknown> = (component,currentRoute, currentState, nextState) => {
  console.log(component);
  console.log(currentRoute);
  console.log(currentState);
  console.log(nextState)
  return true;
}

export const authGuardIsAdmin : CanActivateFn = (route, state)=>{
  const userData = localStorage.getItem("userData")
  const router = inject(Router);
  const userObj = JSON.parse(userData);
  if (userObj?.isAdmin) {
    return true;
  }

  router.navigate(["home"]);
  return false;
}

export const authGuardIsNotAdmin : CanActivateFn = (route, state)=>{
  const userData = localStorage.getItem("userData")
  const router = inject(Router);
  const userObj = JSON.parse(userData);
  if (!userObj?.isAdmin) {
    return true;
  }

  router.navigate(["home"]);
  return false;
}