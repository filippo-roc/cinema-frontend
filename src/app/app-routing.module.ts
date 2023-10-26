import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { DetailsComponent } from './details/details.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { AddFilmComponent } from './add-film/add-film.component';
import { ReservationComponent } from './reservation/reservation.component';
import { authGuardIsAdmin, authGuardIsLogged, authGuardNotLogged } from './auth.guard';
import { UserComponent } from './user/user.component';
import { AddSchedulingComponent } from './add-scheduling/add-scheduling.component';
import { AddHallComponent } from './add-hall/add-hall.component';
import { UserReservationComponent } from './user-reservation/user-reservation.component';
import { ManageComponent } from './manage/manage.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate:[authGuardNotLogged]
  },
  {
    path: 'signin',
    component: SignInComponent,
    canActivate:[authGuardNotLogged]

  },
  {
    path: 'details',
    component: DetailsComponent,
  },
  {
    path: 'catalogue',
    component: CatalogueComponent,
  },
  {
    path: 'manage',
    component: ManageComponent,
    canActivate:[authGuardIsAdmin]

  },
  {
    path: 'add-film',
    component: AddFilmComponent,
    canActivate:[authGuardIsAdmin]

  },
  {
    path: 'add-scheduling',
    component: AddSchedulingComponent,
    canActivate:[authGuardIsAdmin]

  },
  {
    path: 'add-hall',
    component: AddHallComponent,
    canActivate:[authGuardIsAdmin]

  },
  {
    path: 'reservation',
    component: ReservationComponent,
    canActivate:[authGuardIsLogged]
  },
  {
    path: 'user-reservation',
    component: UserReservationComponent,
    canActivate:[authGuardIsLogged]
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate:[authGuardIsLogged]

  },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
