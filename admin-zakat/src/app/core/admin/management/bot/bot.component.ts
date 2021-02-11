import { Component, OnInit, TemplateRef } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router, Event, ActivatedRoute, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { NotifyService } from 'src/app/shared/handler/notify/notify.service';
import { ServicesService } from '../../../../shared/services/services/service.service';

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.scss']
})
export class BotComponent implements OnInit {
  
  constructor(private servicesService: ServicesService,private fb: FormBuilder,private loadingBar: LoadingBarService,private modalService: BsModalService,private notifyService: NotifyService,private router: Router,) {
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

    subForm: FormGroup
    subFormMessages = {
      name: [
        { type: 'required', message: 'Name is required' }
      ],
      id: [
        { type: 'required', message: 'Id is required' }
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
    })
    this.updateForm = this.fb.group({
      name: new FormControl(null, Validators.compose([Validators.required])),
    })
    this.subForm = this.fb.group({
      name: new FormControl(null, Validators.compose([Validators.required])),
      id: new FormControl(null, Validators.compose([Validators.required])),
    })
  }

  notifySuccess(message){
    let title = 'Success'
    this.notifyService.openToastr(title, message)
  }

  create() {    
    this.loadingBar.start()
    console.log(this.createForm);
    this.servicesService.createBotCategory(this.createForm).subscribe(
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
    
    this.servicesService.updateBotCategory(this.row.id,this.updateForm).subscribe(
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
    this.servicesService.deleteBotCategory(row.id).subscribe(
      (res) => {  
          this.notifySuccess("Successfully Deleted");
          this.init_data()
      });
  }

  init_data(){
       this.servicesService.getBotCategories().subscribe(
      (res) => {  
        // res.forEach(element => {
          console.log(res);
          
        // })      
        this.tableTemp = res
      })   
  }

  addSub(){
    this.servicesService.addSubCategory(this.subForm.value).subscribe(
      (res) => {
          if (res.status == "Success"){
            this.notifySuccess("Successfully Deleted");
            this.init_data();
            this.closeModal();
          }
      });
  }

  openModalSub(modalRef: TemplateRef<any>, row) {
      this.row = row
      this.subForm.controls.id.setValue(this.row.id)
      this.modal = this.modalService.show(
        modalRef, this.modalConfig
      );
  }

  openModal(modalRef: TemplateRef<any>, row) {
        if (row == ""){
          this.modal = this.modalService.show(
              modalRef, this.modalConfig
            );
        }else{

          this.row = row 
          
          this.updateForm.controls.name.setValue(this.row.category_name)
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

  navigateToSubPage(id){   
    return this.router.navigate(['/admin/management/botsubcategory'],{ queryParams: { "id": id }}) 
  }

}
