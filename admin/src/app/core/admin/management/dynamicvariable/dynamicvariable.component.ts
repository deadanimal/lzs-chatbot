import { Component, OnInit, TemplateRef } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { NotifyService } from 'src/app/shared/handler/notify/notify.service';
import { DynamicvariableService } from '../../../../shared/services/services/dynamicvariable.service';

@Component({
  selector: 'app-dynamicvariable',
  templateUrl: './dynamicvariable.component.html',
  styleUrls: ['./dynamicvariable.component.scss']
})
export class dynamicvariableComponent implements OnInit {
  
  constructor(private DynamicvariableService: DynamicvariableService,private fb: FormBuilder,private loadingBar: LoadingBarService,private modalService: BsModalService,private notifyService: NotifyService) {
  }

  // Modal
  modal: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: 'modal-dialog-centered modal-lg',
  };
  tableTemp = [];
  row: any;

    // Form
    createForm: FormGroup
    createFormMessages = {
      name: [
        { type: 'required', message: 'Name is required' }
      ],     
    };
    updateForm: FormGroup
    updateFormMessages = {
      name: [
        { type: 'required', message: 'Name is required' }
      ],     
    };
    
  ngOnInit() {
    this.init_data()
    this.initForm()
  }

  onActivate($event){

  }

  initForm() {
    this.createForm = this.fb.group({
      name: new FormControl(null, Validators.compose([Validators.required])),
      value: new FormControl(null, Validators.compose([Validators.required]))
    })
    this.updateForm = this.fb.group({
      name: new FormControl(null, Validators.compose([Validators.required])),
      value: new FormControl(null, Validators.compose([Validators.required]))
    })
  }

  notifySuccess(message){
    let title = 'Success'
    this.notifyService.openToastr(title, message)
  }

  create() {    
    this.loadingBar.start()
    console.log(this.createForm);
    this.DynamicvariableService.create(this.createForm).subscribe(
      (res) => {
        this.notifySuccess("Successfully Created")
        this.closeModal()
        this.init_data()
        this.loadingBar.complete()
      },
      () => {
        //this.notifySuccess("Successfully Created")
        this.loadingBar.complete()
      },
      () => {}
    )
  } 

  update() {    
    this.loadingBar.start()
    
    this.DynamicvariableService.update(this.row.id,this.updateForm).subscribe(
      (res) => {
        this.notifySuccess("Successfully updated")
        this.closeModal()
        this.init_data()
        this.loadingBar.complete()
      },
      () => {
        //this.notifySuccess("Successfully updated")
        this.loadingBar.complete()
      },
      () => {}
    )
  } 

  onTreeAction(event: any) {
    const index = event.rowIndex;
    const row = event.row;
    if (row.treeStatus === 'collapsed') {
      row.treeStatus = 'expanded';
    } else {
      row.treeStatus = 'collapsed';
    }
    //this.tableTemp = [...this.tableTemp];
  }

  delete(row){
    this.DynamicvariableService.delete(row.id).subscribe(
      (res) => {  
          this.notifySuccess("Successfully Deleted");
          this.init_data()
      });
  }

  init_data(){
       this.DynamicvariableService.get().subscribe(
      (res) => {  
        // res.forEach(element => {

        // })      
        this.tableTemp = res
      })   
  }

  openModal(modalRef: TemplateRef<any>, row) {
        if (row == ""){
          this.modal = this.modalService.show(
              modalRef, this.modalConfig
            );
        }else{

          this.row = row 
          
          this.updateForm.controls.name.setValue(this.row.name)
          this.updateForm.controls.value.setValue(this.row.value)
          this.modal = this.modalService.show(
            modalRef, this.modalConfig
          );
        }

  } 
  closeModal() {
    this.modal.hide();
    // this.isCompleted = false
    // this.completedDate = ''
    // this.remarks = ''
    // delete this.selectedRow
  }  
}
