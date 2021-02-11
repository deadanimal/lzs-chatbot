import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { NotifyService } from 'src/app/shared/handler/notify/notify.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  // Image
  imgLogo = 'assets/img/logo/zakat-sel-logo.png'
  email : string
  token : string
  
  // Form
  focusEmail
  resetForm: FormGroup
  resetFormMessages = {
    'email': [
      { type: 'required', message: 'Password is required' },
      { type: 'pattern', message: '9 characters,1 uppercase,1 lowercase,1 number,1 special character'}
    ]
  }

  constructor(
    private authService: AuthService,
    private notifyService: NotifyService,
    private formBuilder: FormBuilder,
    private loadingBar: LoadingBarService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const tokenparam: string = this.route.snapshot.queryParamMap.get('token');
    const emailparam: string = this.route.snapshot.queryParamMap.get('email');

    this.resetForm = this.formBuilder.group({
      truemail: new FormControl('', Validators.compose([
      ])),
      token: new FormControl('', Validators.compose([
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@!#$%^)(&*?])[A-Za-z\\d@!#$%^&)(*?]{9,}$")
      ]))
    })

    this.resetForm.controls.truemail.setValue(emailparam);
    this.resetForm.controls.token.setValue(tokenparam);
  }

  reset() {
    this.loadingBar.start()
    this.authService.submitChangePassword(this.resetForm.value).subscribe(
      (res) =>{
          if (res.status == "success"){
            this.successMessage()
            this.navigatePage('login')            
          }else{
            this.errorMessage(res.status)
          }
          this.loadingBar.complete()
      }      
    )
  }

  navigatePage(path: String) {
    if (path == 'login') {
      return this.router.navigate(['/auth/login'])
    }
  }

  successMessage() {
    let title = 'Success'
    let message = 'Successfully Changed Password'
    this.notifyService.openToastr(title, message)
  }

  errorMessage(err) {
    let title = 'Error'
    let message = err
    this.notifyService.openToastrError(title, message)
  }

}
