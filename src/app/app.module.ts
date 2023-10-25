import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // per FormsModule

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { DetailsComponent } from './details/details.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AddFilmComponent } from './add-film/add-film.component';

import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignInComponent,
    DetailsComponent,
    CatalogueComponent,
    HeaderComponent,
    HomeComponent,
    AddFilmComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
