import { Component }        from '@angular/core';
import { Router,
         NavigationExtras } from '@angular/router';
import { AuthService }      from './auth.service';

@Component({
  // template: `
  //   <h2>LOGIN</h2>
  //   <p>{{message}}</p>
  //   <p>
  //     <button (click)="login()"  *ngIf="!authService.isLoggedIn">Login</button>
  //     <button (click)="logout()" *ngIf="authService.isLoggedIn">Logout</button>
  //   </p>`
  templateUrl:`../html/login.html`
})
export class LoginComponent {
  message: string;

  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in ...';

    this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        console.log(this.authService.redirectUrl)
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';
console.log(redirect)
        // Set our navigation extras object
        // that passes on our global query params and fragment
        let navigationExtras: NavigationExtras = {
          preserveQueryParams: true,
          preserveFragment: true
        };

        // Redirect the user
        this.router.navigate([redirect], navigationExtras);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/