import { Component, OnInit, OnDestroy, NgZone, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { NotifyService } from 'src/app/shared/handler/notify/notify.service';
import swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

export enum SelectionType {
  single = 'single',
  multi = 'multi',
  multiClick = 'multiClick',
  cell = 'cell',
  checkbox = 'checkbox'
}

@Component({
  selector: 'app-management-user',
  templateUrl: './management-user.component.html',
  styleUrls: ['./management-user.component.scss']
})
export class ManagementUserComponent implements OnInit, OnDestroy {

  // Table
  tableEntries: number = 5;
  tableSelected: any[] = [];
  tableTemp = [];
  tableActiveRow: any;
  tableRows: any[] = [];
  SelectionType = SelectionType;

  // Modal
  modal: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: "modal-dialog-centered"
  };

  // Form
  registerForm: FormGroup
  registerFormMessages = {
    'name': [
      { type: 'required', message: 'Name is required' }
    ],
    'role': [
      { type: 'required', message: 'Role is required' }
    ],
    'password':[
      { type: 'required', message: 'Password is required' },
      { type: 'pattern', message: '9 characters,1 uppercase,1 lowercase,1 number,1 special character'}
    ],
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'email', message: 'A valid email is required' }
    ]
  }

  constructor(
    private authService: AuthService,
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private notifyService: NotifyService,
    private zone: NgZone
  ) {
    this.getData()
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: new FormControl('', Validators.compose([
        Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@!#$%^)(&*?])[A-Za-z\\d@!#$%^&)(*?]{9,}$")
      ])),    
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      role: new FormControl(1, Validators.compose([
        Validators.required
      ])),
    })
  }

  ngOnDestroy() {

  }

  getData() {
    this.authService.getAllUsers().subscribe(
      (res) => {
        // Success
        this.tableRows = res
        this.tableRows.forEach(element => {
          element.created_at = new Date(element.created_at).toLocaleDateString();
        });
        this.tableTemp = this.tableRows;
      },
      () => {
        // Unsuccess
      },
      () => {

      }
    )
  }

  delete(id){
    this.authService.deleteUser(id).subscribe((res)=>{
      if (res.status == "success"){
        this.successMessage("User Deleted")
        this.getData()
      // }else if (res.status == "failunique"){
      //   this.errorMessage("Email Not Unique")
      // }
      }
    })
  }

  openModal(modalRef: TemplateRef<any>) {
    this.registerForm.controls.role.setValue(1);
    this.modal = this.modalService.show(modalRef, this.modalConfig);
  }

  editModal(modalRef: TemplateRef<any>,row) {
    this.registerForm.controls.role.setValue(2);
    this.modal = this.modalService.show(modalRef, this.modalConfig);
  }

  closeModal() {
    this.modal.hide()
    this.registerForm.reset()
  }

  confirm() {
    this.authService.register(this.registerForm.value).subscribe((res)=>{
      if (res.status == "success"){
        this.successMessage("User Registered")
        this.getData()
        this.closeModal()
      }else if (res.status == "failunique"){
        this.errorMessage("Email Not Unique")
      }

    })
  }

  disableTheUser(id,disabled){
    this.authService.disableUser(id,disabled).subscribe((res)=>{
      if (res.status == "success"){
          if (disabled == 0){
             this.successMessage("User Has Been Successfully Disabled")
          }else{
              this.successMessage("User Has Been Successfully Activated")
          }
          this.getData();
      }
    })
  }

  successMessage(tmessage) {
    let title = 'Success'
    this.notifyService.openToastr(title, tmessage)
    
  }
  errorMessage(emsg){
    let title = 'Error'
    this.notifyService.openToastrError(title, emsg)
  }
  register() {
    swal.fire({
      title: "Success",
      text: "A new user has been created!",
      // type: "success",
      // buttonsStyling: false,
      // confirmButtonClass: "btn btn-success",
      confirmButtonText: "Close"
    }).then((result) => {
      if (result.value) {
        this.modal.hide()
        this.registerForm.reset()
      }
    })
  }

  entriesChange($event) {
    this.tableEntries = $event.target.value;
  }

  filterTable($event) {
    let val = $event.target.value;

    this.tableRows = this.tableTemp.filter(function (d) {
      for (var key in d) {
       // console.log(d[key]);
        //if (d[key])
        if (key == 'email' && d[key].toLowerCase().indexOf(val) !== -1) {
          return true;
        }
      }
      return false;
    });
    // console.log(this.tableRows);
    
  }

  onSelect({ selected }) {
    this.tableSelected.splice(0, this.tableSelected.length);
    this.tableSelected.push(...selected);
  }

  onActivate(event) {
    this.tableActiveRow = event.row;
  }

}
