import { Injectable } from '@angular/core';
import { 
  ActivatedRouteSnapshot,
  CanActivateChild,
  CanActivate, 
  Router
} from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { Observable } from 'rxjs';
import { JwtService } from 'src/app/shared/handler/jwt/jwt.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild,CanActivate {
  
  constructor(
    private router: Router,
    private auth: AuthService,
    private jwtService: JwtService,

  ){ }
  
  canActivateChild(route: ActivatedRouteSnapshot): boolean{
    if (this.auth.userDetail === undefined) {
      let token = this.jwtService.getToken('accessToken');
      if (!token) {
          this.router.navigate(["/auth/login"]); 
      }else{
         return true;
      }
      // this.auth.getUserDetail().subscribe((reso)=>{
      //   if (reso.role == 2 || reso.role == 1) {        
      //     return true
      //   }
      //   else {        
      //     this.router.navigate(['/auth/login'])
      //   }     
      // })
    }else{
      if (this.auth.userDetail.role == 2 || this.auth.userDetail.role == 1) {        
        return true
      }
      else {        
        this.router.navigate(['/auth/login'])
      }     
    }     
  }

  canActivate(route: ActivatedRouteSnapshot){

      if (this.auth.userDetail === undefined) {
        let token = this.jwtService.getToken('accessToken');
        if (!token) {
            this.router.navigate(["/auth/login"]); 
        }else{
           return true;
        }
      }else{
        if (this.auth.userDetail.role == 2) {
          return true
        }
        else {
          return this.router.navigate(['/admin/dashboard'])
        }
      }
  
  }
}
