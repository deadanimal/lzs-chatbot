import { Component, OnInit, TemplateRef} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { NotifyService } from 'src/app/shared/handler/notify/notify.service';
import { botsubcategoryService } from '../../../../shared/services/services/botsubcategory.service';

@Component({
  selector: 'app-botsubcategory',
  templateUrl: './botsubcategory.component.html',
  styleUrls: ['./botsubcategory.component.scss']
})
export class botsubcategoryComponent implements OnInit {
  
  id: number;
  botsubcategoryname: string;
  deletable: number;
  has_sub: number = 0;
  has_question: number = 0;
  englishName: string;

  constructor(private botsubcategoryService: botsubcategoryService,private router: Router,private fb: FormBuilder,private loadingBar: LoadingBarService,private modalService: BsModalService,private notifyService: NotifyService,private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(
      (path: any) => {       
          this.id = path['id']; 
          this.getthedata();      
      }
    )
  }

  // Modal
  modal: BsModalRef;
  modalConfig = {
    ignoreBackdropClick: true,
    keyboard: true,
    class: 'modal-dialog-centered modal-lg',
  };
  tableTemp = [];
  tableTemp2 = [];
  tableTemp3 = [];
  row: any;
  first = false;
  ender = false;

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

    editMainForm: FormGroup
    editMainFormMessages = {
      name: [
        { type: 'required', message: 'Name is required' }
      ],
      id: [
        { type: 'required', message: 'Id is required' }
      ],       
    };

    //to add sub category
    addSubForm: FormGroup
    addSubFormMessages = {
      name: [
        { type: 'required', message: 'Name is required' }
      ],
      id: [
        { type: 'required', message: 'Id is required' }
      ],       
    };

    addQForm: FormGroup
    addQMessages = {
      id:[
        {type: 'required', message: 'Id is required'}
      ],
      question: [
        { type: 'required', message: 'Question is required' }
      ],
      first: [
        { type: 'required', message: 'First is required' }
      ],       
    };

    addZForm: FormGroup
    addZMessages = {
      name:[
        {type: 'required', message: 'Name is required'}
      ],
      link: [
        { type: 'required', message: 'Link is required' }
      ],    
    };
    editZForm: FormGroup
    editZMessages = {
      name:[
        {type: 'required', message: 'Name is required'}
      ],
      link: [
        { type: 'required', message: 'Link is required' }
      ],    
    };

    editQForm: FormGroup
    editQMessages = {
      id:[
        {type: 'required', message: 'Id is required'}
      ],
      question: [
        { type: 'required', message: 'Question is required' }
      ],
      first: [
        { type: 'required', message: 'First is required' }
      ],       
    };
    
  ngOnInit() {
    //this.init_data()
    this.initForm() 
  }

  getthedata(){
    this.botsubcategoryService.get(this.id,"main").subscribe(
      (res) => {  
        //console.log(res);
        
        this.botsubcategoryname = res[0].sub_category_name;
        this.englishName = res[0].sub_category_name_english;
        this.deletable = res[0].delete;
        this.has_sub = res[0].has_sub;
        this.has_question = res[0].has_question;
        this.tableTemp2 = res[0].questions;
        this.tableTemp3 = res[0].endings;
        this.init_data()
      })   
     
  }

  initForm() {
    this.createForm = this.fb.group({
      name: new FormControl(null, Validators.compose([Validators.required])),
      englishname: new FormControl(null)
    })
    this.updateForm = this.fb.group({
      name: new FormControl(null, Validators.compose([Validators.required])),
      englishname: new FormControl(null),
      id: new FormControl(null, Validators.compose([Validators.required])),
    })
    this.editMainForm = this.fb.group({
      englishname: new FormControl(null),
      name: new FormControl(null, Validators.compose([Validators.required])),
      id: new FormControl(null, Validators.compose([Validators.required])),
    })
    this.addSubForm = this.fb.group({
      englishname: new FormControl(null),
      name: new FormControl(null, Validators.compose([Validators.required])),
      id: new FormControl(null, Validators.compose([Validators.required])),
    })
    this.addQForm = this.fb.group({
      id: new FormControl(null),
      question: new FormControl(null, Validators.compose([Validators.required])),
      first: new FormControl(false, Validators.compose([Validators.required])),
      buttonname: new FormControl(null),
      buttonenglish: new FormControl(null),
      questionenglish: new FormControl(null),
      buttonlink: new FormControl(null),
      thetrue: new FormControl(null),
      thefalse: new FormControl(null),
      requiredanswer: new FormControl(null),
      logic: new FormControl(null),
    })
    this.addZForm = this.fb.group({
      id: new FormControl(null),
      name: new FormControl(null, Validators.compose([Validators.required])),
      link: new FormControl(null, Validators.compose([Validators.required])),
      nameenglish: new FormControl(null),
    })
    this.editZForm = this.fb.group({
      id: new FormControl(this.id),
      name: new FormControl(null, Validators.compose([Validators.required])),
      link: new FormControl(null, Validators.compose([Validators.required])),
      nameenglish: new FormControl(null),
    })
    this.editQForm = this.fb.group({
      id: new FormControl(this.id),
      question: new FormControl(null, Validators.compose([Validators.required])),
      first: new FormControl(false, Validators.compose([Validators.required])),
      buttonname: new FormControl(null),
      buttonlink: new FormControl(null),
      buttonenglish: new FormControl(null),
      questionenglish: new FormControl(null),
      thetrue: new FormControl(null),
      thefalse: new FormControl(null),
      requiredanswer: new FormControl(null),
      logic: new FormControl(null),

    })
  }

  deleteQ(id){
    this.botsubcategoryService.deleteQ(id).subscribe(
      (res)=>{
        if (res == "success"){
          this.getthedata()
          this.notifySuccess("Successfully Deleted");
        }
      }
     )
  }
  
  deleteQ2(id){
    this.botsubcategoryService.deleteZ(id).subscribe(
      (res)=>{
        if (res == "success"){
          this.getthedata()
          this.notifySuccess("Successfully Deleted");
        }
      }
     )
  }

  notifySuccess(message){
    let title = 'Success'
    this.notifyService.openToastr(title, message)
  }

  create() {    
    this.loadingBar.start()
    //console.log(this.createForm);
    // this.servicesService.createbotsubcategoryCategory(this.createForm).subscribe(
    //   (res) => {
    //     this.notifySuccess("Successfully Created")
    //     this.closeModal()
    //     this.init_data()
    //     this.loadingBar.complete()
    //   },
    //   () => {
    //     //this.notifySuccess("Successfully Created")
    //     this.loadingBar.complete()
    //   },
    //   () => {}
    // )
  } 

  update() {    
    this.loadingBar.start()
    
    this.botsubcategoryService.update(this.updateForm.value).subscribe(
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

  addQ(){
    this.loadingBar.start()
    this.addQForm.controls.id.setValue(this.id);
    this.botsubcategoryService.addq(this.addQForm.value).subscribe(
      (res) => {
        this.notifySuccess("Successfully added")
        this.addQForm.reset()
        this.addQForm.controls.first.setValue(0)
        this.closeModal()
        this.getthedata()
        this.loadingBar.complete()
      },
      () => {
        //this.notifySuccess("Successfully updated")
        this.loadingBar.complete()
      },
      () => {
      }
    )
  }

  addZ(){
    this.loadingBar.start()
    this.addZForm.controls.id.setValue(this.id);
    this.botsubcategoryService.addz(this.addZForm.value).subscribe(
      (res) => {
        this.notifySuccess("Successfully added")
        this.addZForm.reset()
        this.closeModal()
        this.getthedata()
        this.loadingBar.complete()
      },
      () => {
        //this.notifySuccess("Successfully updated")
        this.loadingBar.complete()
      },
      () => {
      }
    )
  }

  editMain(){
    this.botsubcategoryService.editMain(this.editMainForm.value).subscribe(
      (res) => {  
          this.notifySuccess("Successfully Edited");
          this.botsubcategoryname = this.editMainForm.value.name;
          this.englishName = this.editMainForm.value.englishname;
          this.closeModal();
      });
  }

  delete(row){
    this.botsubcategoryService.delete(row.id).subscribe(
      (res) => {  
          this.notifySuccess("Successfully Deleted");
          this.init_data()
      });
  }

  addQuestion(){

  }

  deleteMain(){
    this.botsubcategoryService.deleteMain(this.id).subscribe(
      (res) => {  
          this.notifySuccess("Successfully Deleted");
          return this.router.navigate(['/admin/management/bot']);
      });
  }

  init_data(){
    
       this.botsubcategoryService.get(this.id,"").subscribe(
      (res) => {  
       
        //console.log(res);   
     
        this.tableTemp = res; 
        setTimeout(() => {
           if (res[0].length < 1){
            this.has_sub = 0;
            // this.has_question = 0;
            // this.tableTemp2 = res[0];
            //this.has_question = 1;
          //   this.tableTemp = null;
          //   setTimeout(() => {
          //       this.tableTemp = res;
          //   }, 50);
          // }else{
          //    this.tableTemp2 = res[0];
             
          // }
        }}, 50);    
       
      })   
  }

  addSub(){
    this.botsubcategoryService.create(this.addSubForm.value).subscribe(
      (res) => {
          if (res.status == "Success"){
            this.notifySuccess("Successfully Added");
            this.init_data();
            setTimeout(() => {
              this.has_sub = 1;              
            }, 500);
            this.closeModal();
          }
      });
  }

  openEditMainModal(modalRef: TemplateRef<any>) {
     
      this.editMainForm.controls.id.setValue(this.id)
      this.editMainForm.controls.name.setValue(this.botsubcategoryname)
      this.editMainForm.controls.englishname.setValue(this.englishName)
      this.modal = this.modalService.show(
        modalRef, this.modalConfig
      );
  }

  openAddSubModal(modalRef: TemplateRef<any>) {
  
    this.addSubForm.controls.id.setValue(this.id)
    //this.editMainForm.controls.name.setValue(this.botsubcategoryname)
    this.modal = this.modalService.show(
      modalRef, this.modalConfig
    );
}

openQModal(modalRef: TemplateRef<any>,opr,row) {
  if (opr == "edit"){
      this.addQForm.controls.id.setValue(row.id);
      this.addQForm.controls.first.setValue(row.first == 1? true : false);
      this.addQForm.controls.question.setValue(row.question);
      this.addQForm.controls.buttonname.setValue(row.button);
      this.addQForm.controls.buttonlink.setValue(row.link);
      this.addQForm.controls.thetrue.setValue(row.trueRoute);
      this.addQForm.controls.thefalse.setValue(row.falseRoute);
      this.addQForm.controls.requiredanswer.setValue(row.requiredAnswers);
      this.addQForm.controls.logic.setValue(row.logic); 
  }
  if (opr == "editZ"){

  }
  // if (opr == "addZ"){
    
  // }
  this.modal = this.modalService.show(
    modalRef, this.modalConfig
  );
}

editQModal2(modalRef: TemplateRef<any>,row) {
  this.row = row;
      this.editQForm.controls.id.setValue(row.id);
      this.editQForm.controls.first.setValue(row.first);
      this.editQForm.controls.question.setValue(row.question);
      this.editQForm.controls.questionenglish.setValue(row.question_english);
      this.editQForm.controls.buttonname.setValue(row.button);
      this.editQForm.controls.buttonlink.setValue(row.link);
      this.editQForm.controls.buttonenglish.setValue(row.button_english);
      this.editQForm.controls.thetrue.setValue(row.trueRoute);
      this.editQForm.controls.thefalse.setValue(row.falseRoute);
      this.editQForm.controls.requiredanswer.setValue(row.requiredAnswers);
      this.editQForm.controls.logic.setValue(row.logic); 
  
  this.modal = this.modalService.show(
    modalRef, this.modalConfig
  );
}

editQModal3(modalRef: TemplateRef<any>,row) {
  this.row = row;

      this.editZForm.controls.id.setValue(row.id);
      this.editZForm.controls.name.setValue(row.name);
      this.editZForm.controls.link.setValue(row.link);
      this.editZForm.controls.nameenglish.setValue(row.name_english);
  
  this.modal = this.modalService.show(
    modalRef, this.modalConfig
  );
}

editQ(){
  this.botsubcategoryService.editq(this.editQForm.value).subscribe(
    (res) => {
        if (res == "success"){
          this.notifySuccess("Successfully Edited")
          this.getthedata();
          this.closeModal()

        }
    }
  )
}
editZ(){
  this.botsubcategoryService.editz(this.editZForm.value).subscribe(
    (res) => {
        if (res == "success"){
          this.notifySuccess("Successfully Edited")
          this.getthedata();
          this.closeModal()

        }
    }
  )
}

navigateToSubPage(id){   
  return this.router.navigate(['/admin/management/botsubcategory'],{ queryParams: { "id": id }}) 
}

openSubModal(modalRef: TemplateRef<any>,row) {
  
  this.addSubForm.controls.id.setValue(row.id)
  //this.editMainForm.controls.name.setValue(this.botsubcategoryname)
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
          this.updateForm.controls.id.setValue(this.row.id)
          this.updateForm.controls.name.setValue(this.row.sub_category_name)
          this.updateForm.controls.englishname.setValue(this.row.sub_category_name_english)
          this.modal = this.modalService.show(
            modalRef, this.modalConfig
          );
        }

  } 
  navigatePath() {

  }
  closeModal() {
    this.modal.hide();
  }  
}
