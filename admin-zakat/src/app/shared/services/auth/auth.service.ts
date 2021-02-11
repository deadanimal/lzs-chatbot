import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { TokenResponse } from './auth.model';
import { Form } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { JwtService } from '../../handler/jwt/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // URL
  public urlRegister: string = environment.baseUrl + 'api/register'
  public urlPasswordChange: string = environment.baseUrl + 'auth/password/change/'
  public urlPasswordReset: string = environment.baseUrl + 'auth/password/reset'
  public urlTokenObtain: string = environment.baseUrl + 'auth/obtain/'
  public urlTokenRefresh: string = environment.baseUrl + 'api/refresh/'
  public urlTokenVerify: string = environment.baseUrl + 'auth/verify/' 
  public urlUser: string = environment.baseUrl + 'v1/users/'
  public urlLogout: string = environment.baseUrl + 'api/logout'
  public urlLogin: string = environment.baseUrl + 'api/authenticate'

  // Data
  public token: TokenResponse
  public tokenAccess: string
  public tokenRefresh: string
  public email: string
  public userID: string
  public username: string
  public userType: string
  public userRole: number = -1

  // Temp
  public userDetail: any
  retrievedUsers: any = []
  
  constructor(
    private jwtService: JwtService,
    private http: HttpClient
  ) { }

  register(body): Observable<any> {
    return this.http.post<any>(this.urlRegister, body).pipe(
      tap((res) => {
      })
    )
  }

  login(json): Observable<any> {
    
    return this.http.post<any>(this.urlLogin,json).pipe(
      tap((res) => {
        this.obtainToken(res.access_token)        
      
      })
    )
  }

  changePassword(body): Observable<any> {
    return this.http.post<any>(environment.baseUrl + "api/changePassword", body).pipe(
      tap((res) => {
      })
    )
  }
  
  updateUser(body): Observable<any> {
    return this.http.post<any>(environment.baseUrl + "api/updateUser", body).pipe(
      tap((res) => {
      })
    )
  }

  resetPassword(body: Form): Observable<any> {
    return this.http.post<any>(this.urlPasswordReset, body).pipe(
      tap((res) => {
        console.log('Reset password: ', res)
      })
    )
  }

  obtainToken(token){
    let jwtHelper: JwtHelperService = new JwtHelperService()
  
        // this.token = res
        //this.tokenRefresh = res.refresh
        this.tokenAccess = token
        // let decodedToken = jwtHelper.decodeToken(this.tokenAccess)
        // this.email = decodedToken.email
        // this.username = decodedToken.username
        // this.userID = decodedToken.user_id
        // this.userType = decodedToken.user_type
        this.jwtService.saveToken('accessToken', this.tokenAccess)
        //this.jwtService.saveToken('refreshToken', this.tokenRefresh)
  }

  logout(): Observable<any>{
    return this.http.post<any>(this.urlLogout,{}).pipe(
      tap((res) => {
        this.obtainToken(res.access_token)        
      
      },error =>{
        
      })
    )
  }

  refreshToken(): Observable<any> {
    let refreshToken = this.jwtService.getToken('refreshToken')
    let body = {
      refresh: refreshToken
    }
    return this.http.post<any>(this.urlTokenRefresh, body).pipe(
      tap((res) => {
        console.log('Token refresh: ', res)
      })
    )
  }

  verifyToken(body: Form): Observable<any> {
    return this.http.post<any>(this.urlTokenVerify, body).pipe(
      tap((res) => {
        console.log('Token verify: ', res)
      })
    )
  }

  getUserDetail(): Observable<any> {
    
    return this.http.get<any>(environment.baseUrl + "api/index").pipe(
      tap((res) => {
         this.userDetail = res
        //console.log('User detail', this.userDetail)
      }),
    )
  }

  deleteUser(id): Observable<any> {
    return this.http.post<any>(environment.baseUrl + "api/deleteUser", {'id': id}).pipe(
      tap((res) => {
      })
    )
  }

  disableUser(id,disabled): Observable<any> {
    return this.http.post<any>(environment.baseUrl + "api/disableUser", {'id': id,'disabled': disabled}).pipe(
      tap((res) => {
      })
    )
  }
  
  sendResetLink(email): Observable<any> {
    return this.http.post<any>(environment.baseUrl + "api/sendResetLink", {'email': email}).pipe(
      tap((res) => {
      })
    )
  }

  submitChangePassword(body): Observable<any> {
    return this.http.post<any>(environment.baseUrl + "api/changePassNow", body).pipe(
      tap((res) => {
      })
    )
  }
  
  getAllUsers(): Observable<any> {
    return this.http.get<any>(environment.baseUrl + "api/getUsers").pipe(
      tap((res) => {
         
      }),
    )
  }

}
