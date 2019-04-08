import { Injectable, NgModule } from '@angular/core';
import { Router } from "@angular/router";
import { User } from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { Subject, Observable, BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user$ = new BehaviorSubject<User>(null);
  private user: User;


  constructor(public afAuth: AngularFireAuth, public router: Router) {
   afAuth.user.subscribe(user => {
     this.user = user;
    this.user$.next(user);
   })
  }

  async login(email: string, password: string, nextUrl: string) {
    var result = await this.afAuth.auth.signInWithEmailAndPassword(email, password)
    this.user = result.user;
    this.user$.next(result.user);
    this.router.navigate([nextUrl]);
  }

    get isLoggedIn() {
      console.log(this.user);
      return this.user$.asObservable();
    // var result = false;
    // if (!this.afAuth.auth.currentUser || this.afAuth.auth.currentUser.isAnonymous) {
    //   result = false;
    // } else {
    //   result = true;
    // }
    // console.log(this.afAuth.auth);
    // return result;
  }
  get currentUser(): Observable<User> {
    return this.user$.asObservable();
    // const user = JSON.parse(localStorage.getItem('user')) as User;
    // return user;
  }

  async logout() {
    await this.afAuth.auth.signOut();
    this.user$.next(null);
    this.router.navigate(['admin/login']);
  }

}
