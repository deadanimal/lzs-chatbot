import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { NotifyService } from 'src/app/shared/handler/notify/notify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // Image
  imgLogo = 'assets/img/logo/zakat-sel-logo.png'

  // Form
  focusUsername
  focusPassword
  loginForm: FormGroup
  loginFormMessages = {
    'username': [
      { type: 'required', message: 'Email is required' },
      { type: 'email', message: 'Please enter a valid email'}
    ],
    'password': [
      { type: 'required', message: 'Password is required' },
      { type: 'minLength', message: 'Password must have at least 8 characters' }
    ]
  }

  // User
  userDetails : any

  constructor(
    private authService: AuthService,
    private notifyService: NotifyService,
    private formBuilder: FormBuilder,
    private loadingBar: LoadingBarService,
    private router: Router
  ) { }

  ngOnInit() {
       
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(9)
      ]))
    })
  }

  login() {
    this.loadingBar.start()
    this.authService.login({email: this.loginForm.value.username,password: this.loginForm.value.password}).subscribe(
      (res) => {        
        this.successMessage()
        this.authService.getUserDetail().subscribe((reso)=>{
            this.userDetails = reso 
            if (this.userDetails.role == 1) {
              this.authService.userRole = 1
              this.navigatePage('dashboard-admin')
            }
            else if (this.userDetails.role == 2) {
              this.authService.userRole = 2
              this.navigatePage('dashboard-admin')
            }           
        })        
      },(err) =>{
        console.log(err)
        this.errorMessage(err.error.error)       
      }
    );
    this.loadingBar.complete()   
  }

  navigatePage(path: String) {
    if (path == 'login') {
      return this.router.navigate(['/auth/login'])
    }
    else  if (path == 'forgot') {
      return this.router.navigate(['/auth/forgot'])
    }
    else  if (path == 'register') {
      return this.router.navigate(['/auth/register'])
    }
    else if (path == 'dashboard-admin') {
      return this.router.navigate(['/admin/dashboard'])
    }
    else if (path == 'dashboard-user') {
      return this.router.navigate(['/user/dashboard'])
    }
  }

  successMessage() {
    let title = 'Success'
    let message = 'Logging in right now'
    this.notifyService.openToastr(title, message)
  }

  errorMessage(err) {
    let title = 'Error'
    let message = err
    this.notifyService.openToastrError(title, message)
  }  

}
