import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { NotifyService } from 'src/app/shared/handler/notify/notify.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  // Toggle
  editEnabled: boolean = false
  userDetail: any
  // Form
  editForm: FormGroup
  editFormMessages = {
    'name': [
      { type: 'required', message: 'Name is required' }
    ],
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'email', message: 'A valid email is required' }
    ]
  }

  passwordForm: FormGroup
  passwordFormMessages = {
    'currentpassword': [
      { type: 'required', message: 'Current Password is required' }
    ],
    'newpassword': [
      { type: 'required', message: 'New Password is required' },
      { type: 'pattern', message: '9 characters,1 uppercase,1 lowercase,1 number,1 special character'}
    ],
    'newpassword2': [
      { type: 'required', message: 'New Password is required' },
      { type: 'pattern', message: '9 characters,1 uppercase,1 lowercase,1 number,1 special character'}
    ]
  }

  constructor(
    private authService: AuthService,
    private notifyService: NotifyService,
    private formBuilder: FormBuilder
  ) {
      this.getData()
      this.authService.getUserDetail().subscribe(
          (res)=>{
              this.userDetail = res              
          }
      )
   }

   changePass(){
    if (this.passwordForm.controls.newpassword.value != this.passwordForm.controls.newpassword2.value) {
      this.errorMessage("Both Confirmation and New password didnt match")
    }else{
      
      this.passwordForm.controls.id.setValue(this.userDetail.id);
  
        this.authService.changePassword(this.passwordForm.value).subscribe(
          (res) => {
            if (res.status == "success"){
              this.successMessage("Successfully Changed Password")
            }else{
              this.errorMessage(res.status)
            }
          },
          () => {
            // Unsuccess
          },
          () => {
  
          }
        )
    }
    
   }

   successMessage(tmessage) {
    let title = 'Success'
    this.notifyService.openToastr(title, tmessage)
    
  }

   errorMessage(emsg){
    let title = 'Error'
    this.notifyService.openToastrError(title, emsg)
  }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      name: new FormControl('', Validators.compose([
      ])),
      id: new FormControl('', Validators.compose([
        Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.email
      ]))
    })
    this.passwordForm = this.formBuilder.group({
      currentpassword: new FormControl('', Validators.compose([
        Validators.required
      ])),
      id: new FormControl(null, Validators.compose([
       
      ])),
      newpassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@!#$%^)(&*?])[A-Za-z\\d@!#$%^&)(*?]{9,}$")
      ])),
      newpassword2: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@!#$%^)(&*?])[A-Za-z\\d@!#$%^&)(*?]{9,}$")
      ]))
    })

  }

  getData() {
    this.authService.getUserDetail().subscribe(
      (res) => {
        this.userDetail = res;
      },
      () => {
        // Unsuccess
      },
      () => {

      }
    )
  }

  toggleEdit() {
    this.editEnabled = !this.editEnabled
    if (this.editEnabled === true){
      this.editForm.controls.name.setValue("");
      this.editForm.controls.email.setValue("");
    }
  }

  confirm() {
    this.editForm.controls.id.setValue(this.userDetail.id)

    if (!this.editForm.valid){
        this.errorMessage("Fill The Form Properly")
    }else{

        if (this.editForm.controls.name.value !== null && this.editForm.controls.email.value !== null){
              if (this.editForm.controls.name.value.trim().length == 0 && this.editForm.controls.email.value.trim().length == 0){
                
            }else{
                this.authService.updateUser(this.editForm.value).subscribe(
                  (res)=>{
                      if (res.status == "success"){
                        this.successMessage("Successfully Updated")
                        this.editForm.reset() 
                        this.editEnabled = !this.editEnabled
                        this.getData()
                      }else{
                        this.errorMessage(res.status)
                      }
                  }
                )
            }
        }

        
        
    }
    
    // swal.fire({
    //   title: "Confirmation",
    //   text: "Are you sure to save this edit?",
    //   //type: "info",
    //   //buttonsStyling: false,
    //   //confirmButtonClass: "btn btn-info",
    //   //confirmButtonText: "Confirm",
    //   //showCancelButton: true,
    //  // cancelButtonClass: "btn btn-danger",
    //   cancelButtonText: "Cancel"
    // }).then((result) => {
    //   if (result.value) {
    //     this.edit()
    //   }
    // })
  }

  edit() {
    swal.fire({
      title: "Success",
      text: "Update has been saved",
      // type: "success",
      // buttonsStyling: false,
      // confirmButtonClass: "btn btn-success",
      confirmButtonText: "Close"
    }).then((result) => {
      if (result.value) {
        this.editForm.reset()
      }
    })
  }

}
