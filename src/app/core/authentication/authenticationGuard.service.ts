import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from "@angular/router";
import { AuthenticationService } from "./authentication.service";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class AuthenticationGuardService implements CanActivate {
    
    
    constructor(private authenticationService: AuthenticationService, private router: Router){
    }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        // console.log("Chamou o Guarda...");
        // const path = route.url[0].path;
        // const isLoggedIn = this.authenticationService.isLoggedIn;
        // console.log(isLoggedIn, path);
        // console.log(this.authenticationService);
        // if(path == "login" &&  isLoggedIn) {
        //     this.router.navigate(['admin/dashboard']);
        //     return false;
        // } else if( path == "login" && !isLoggedIn){
        //     return true;
        // }
        // if(this.authenticationService.isLoggedIn){
        //     return true;
        // } else {
        //     this.router.navigate(['/login']);
        //     return false;
        // }

        return true;

}


}