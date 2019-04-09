import { Injectable, NgModule } from '@angular/core';
import { Router } from "@angular/router";
import { User } from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { Subject, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private user$ = new Subject<User>();
  private user: User;


  constructor(public afAuth: AngularFireAuth, public router: Router) {
    this.afAuth.authState.subscribe(_user => {
      this.user = _user;
      this.user$.next(_user);
    })
  }

  login(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password).then(response => {
      const user:User = response.user;
      this.user = user;
      this.user$.next(user);
    }, err => err);
  }

  get isLoggedIn() {
    const user = localStorage.getItem('user');
    return (user == "null" || user == null) ? false : true;
  }
  get currentUser(): Observable<User> {
    return this.user$.asObservable();
    // const user = JSON.parse(localStorage.getItem('user')) as User;
    // return user;
  }

  async logout() {
    await this.afAuth.auth.signOut();
    this.router.navigate(['/login']);
  }

}
