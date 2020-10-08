import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/app/app.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {AuthService} from "./services/auth.service";
import {RouterModule, Routes} from "@angular/router";
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {path: "registration", component: RegistrationComponent},
  {path: "login", component: LoginComponent},
  {path: "users", component: UsersComponent,children: [
      // {path: ":id", component: UserComponent},
    ]
  },
  {path: "users/:id", component: UserComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    UsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
