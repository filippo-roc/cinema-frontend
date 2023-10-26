import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { DetailsComponent } from './details/details.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { AddFilmComponent } from './add-film/add-film.component';
import { ReservationComponent } from './reservation/reservation.component';
import { DettaglioFilmComponent } from './dettaglio-film/dettaglio-film.component';
import { authGuardNotLogged } from './auth.guard';
import { UserComponent } from './user/user.component';
import { AddSchedulingComponent } from './add-scheduling/add-scheduling.component';
import { AddHallComponent } from './add-hall/add-hall.component';
import { AddComponent } from './add/add.component';

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
    path: 'user',
    component: UserComponent,

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
    path: 'add',
    component: AddComponent,
  },
  {
    path: 'add-film',
    component: AddFilmComponent,
  },
  {
    path: 'add-scheduling',
    component: AddSchedulingComponent,
  },
  {
    path: 'add-hall',
    component: AddHallComponent,
  },
  {
    path: 'reservation',
    component: ReservationComponent,
  },
  {
    path: 'dettaglio-film',
    component: DettaglioFilmComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
