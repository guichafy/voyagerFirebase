import { HttpHandler, HttpHeaderResponse, HttpInterceptor, HttpProgressEvent, HttpRequest, HttpResponse, HttpSentEvent, HttpUserEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthenticationService } from "./authentication.service";

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    constructor(private AuthenticationService: AuthenticationService){
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
        if(this.AuthenticationService.isLoggedIn){
            req = req.clone({
                setHeaders: {
                    'logged': 'true'
                }
            })
        }
        return next.handle(req);
    }

}