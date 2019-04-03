import { Injectable, NgModule } from '@angular/core';
import { Router } from "@angular/router";
import { User } from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { Subject, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user$ = new Subject<User>();
  private user: User;


  constructor(public afAuth: AngularFireAuth, public router: Router) {
    this.afAuth.authState.subscribe(_user => {
      this.user = _user;
      this.user$.next(_user);
    })
  }

  async login(email: string, password: string, nextUrl: string) {
    var result = await this.afAuth.auth.signInWithEmailAndPassword(email, password)
    this.router.navigate([nextUrl]);
  }

  get isLoggedIn() {
    if (!this.user || this.user.isAnonymous) {
      return false;
    } else {
      return true;
    }
  }
  get currentUser(): Observable<User> {
    return this.user$.asObservable();
    // const user = JSON.parse(localStorage.getItem('user')) as User;
    // return user;
  }

  async logout() {
    await this.afAuth.auth.signOut();
    this.router.navigate(['admin/login']);
  }

}
