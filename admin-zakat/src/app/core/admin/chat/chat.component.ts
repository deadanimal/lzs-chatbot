import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { ServicesService } from 'src/app/shared/services/services/service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  private firstMessage: number = 1;
  private userId: number;
  public username: string;
  public userlanguage: string;
  private scrolled: number = 0;
  public themessages: {}[] = [];
  public agentinterval: any;
  
  //private convo: [];

  constructor(private authService: AuthService,
    private ServicesService: ServicesService,  
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { 
      this.activatedRoute.queryParams.subscribe(
        (path: any) => {
          this.username = path['name'];
          this.userlanguage = path['language'];
        }
      )
    }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    if (this.scrolled == 1){
      setTimeout(()=> this.scrollBottom(), 500)
      this.scrolled = 0;    
    }
  }

  sendMessage(value){
    if (!!value.trim()){
    this.scrolled = 1;
    var objDiv = document.getElementById("cardbody");
    var elmnt = document.getElementById("thecard");
   
    this.themessages.push({'message': value});    
    
    if (this.firstMessage == 1){
      this.firstMessage = 0;
      //send initial message
      this.ServicesService.sendClientChat(value,"").subscribe(
        (res) => {          
          this.userId = res;        
        });
     (<HTMLInputElement>document.getElementById("msgArea")).value = "";
      //turn on interval
      this.startChannel()
    }
    else{
      this.ServicesService.sendClientChat(value,this.userId).subscribe(
        (res) => {  
          //this.userId = res;        
        });
        (<HTMLInputElement>document.getElementById("msgArea")).value = "";
    }
   }
  }

  startChannel(){
    this.agentinterval = setInterval(()=>{
      this.ServicesService.receiveClientChat().subscribe(
        (res) => {  
          if (res.status != "nothing"){ 
            this.scrolled = 1;                  
            this.themessages.push(res);
          }       
        });
    },4000);
  }

  scrollBottom(){
    var objDiv = document.getElementById("cardbody");
    objDiv.scrollTop = objDiv.scrollHeight;
  }

  endChat(){
      this.ServicesService.sendFeedback("Sila Klik 1 hingga 5 untuk skor perkhidmatan kami",this.userId).subscribe(
      (res) => {  
        if (res.status == "success"){ 
          this.themessages = [];
          clearInterval(this.agentinterval)
          this.navigatePage('home');                 
          //this.themessages.push(res);
        }       
      });
  }

  navigatePage(path: String) {
    if (path == 'home') {
      return this.router.navigate(['/admin/dashboard'],{ queryParams: { chat: 'ended' } })
    }
    else{
      return this.router.navigate([path]);    
    }
  }

}
