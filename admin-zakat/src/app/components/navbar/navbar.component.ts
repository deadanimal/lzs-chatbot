import { Component, OnInit, ElementRef } from "@angular/core";
import { ROUTES } from "../../shared/menu/menu-items";
import { Router, Event, ActivatedRoute, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import {
  Location,
  LocationStrategy,
  PathLocationStrategy
} from "@angular/common";
import { NotifyService } from 'src/app/shared/handler/notify/notify.service';
import { UsersService } from 'src/app/shared/services/users/users.service';
import { ServicesService } from 'src/app/shared/services/services/service.service';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { User } from 'src/app/shared/services/users/users.model';
import { JwtService } from 'src/app/shared/handler/jwt/jwt.service';
import Swal from 'sweetalert2';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {

  focus;
  listTitles: any[];
  location: Location;
  thenotifications: any[]; 
  sidenavOpen: boolean = true;
  intervalId : any;
  usserId: number;
  timeoutid: any;
  name: string;
  ce: any;
  dontroute:number = 0;
  notfinish: number = 0;

  // Data
  user: User
  usser: any;

  // Image
  imgAvatar = 'assets/img/default/avatar2.png'
  token:any;
  constructor(
    location: Location,
    private userService: UsersService,
    private jwtService: JwtService,
    private notifyService: NotifyService,
    private ServicesService: ServicesService,
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    
  ) {

    // this.token = this.jwtService.getToken('accessToken');
    // if (!this.token) {
    //     this.router.navigate(["/auth/login"]); 
    // }else{
    //   this.user = this.userService.user
    //   this.location = location;
       
      this.activatedRoute.queryParams.subscribe(
        (path: any) => {
          if (path['chat'] == "ended"){
            this.dontroute = 1;
            this.notfinish = 0;
            this.checkForLiveChatNotification();
          }else{
            //this.checkForLiveChatNotification();    
          }
        }
      )

      this.router.events.subscribe((event: Event) => {
         if (event instanceof NavigationStart) {
             // Show loading indicator
  
         }
         if (event instanceof NavigationEnd) {
             // Hide loading indicator
  
             if (window.innerWidth < 1200) {
               document.body.classList.remove("g-sidenav-pinned");
               document.body.classList.add("g-sidenav-hidden");
               this.sidenavOpen = false;
             }
         }
  
         if (event instanceof NavigationError) {
             // Hide loading indicator
  
             // Present error to user
             console.log(event.error);
         }
     });


  }

  ngOnInit() {
    this.usser = this.authService.userDetail;
    //console.log('as: ', this.user)
    // if (!this.token) {
    //   this.router.navigate(["/auth/login"]); 
    // }else{

    //   this.listTitles = ROUTES.filter(listTitle => listTitle);
      if (this.dontroute != 1){
        this.checkForLiveChatNotification();  
      }
      this.authService.getUserDetail().subscribe(
        (res) =>{
          this.usser = res;

        });
    // }
  }
  
  acceptLiveRequest(){  
    this.ServicesService.acceptLiveRequest().subscribe(
      (res) => {
          if (res.status == 'Gone'){
             this.gone()
          }else if (res.status == "success"){
            //this.checkIfEnded();
            console.log(res);
            this.navigatePage("admin/chat",res.name,res.language)
          }
      }
    )
  }

  deleteLiveRequest(){
    this.ServicesService.dltAndNotifyClient(this.usserId).subscribe(
      (res) => {        
          if (res.status == "success"){
            let title = 'Success'
            let message = 'Successfully Rejected'
            this.notifyService.openToastr(title, message)
          }else if (res.status == "accepted"){
            let title = 'Error'
            let message = 'Agent Already Accepted'
            this.notifyService.openToastr(title, message)
          }
          this.notfinish = 0;
      }
    )
  }

  //dont forget to clear interval later
  getlcn(){
    //console.log(this.usser);
    //clearInterval(this.intervalId);
    this.notfinish = 1;
    this.ServicesService.getLiveChatNotification().subscribe(
      (res) => {  
         
        if (res.status == "nothing"){
         
        this.notfinish = 0;
         //else if(res.status == "stop"){
        //   //clearInterval(this.intervalId);
         }else{    
          //console.log(res);
          
          this.usserId = res[0].userid;
          clearInterval(this.intervalId);

          if (this.usser.role == 2){        
              Swal.fire({
                title: 'Admin Didnt Respond In Time <br><br>' + "Chosen Language: " + res[0].language + "<br>In Queue: " + res[0].waitcount,
                timer: 30000,
                confirmButtonText: 'Reject',
                allowOutsideClick: false,
              }).then((result) => {
                /* Read more about handling dismissals below */
               // console.log(result);            
                if (result.dismiss === Swal.DismissReason.timer) {
                    this.deleteLiveRequest();
                    
                    setTimeout(() => {
                      this.notfinish = 0;
                      this.checkForLiveChatNotification(); 
                    }, 1000);                
                }else{
                  this.deleteLiveRequest();
                  
                  setTimeout(() => {
                    this.notfinish = 0;
                    this.checkForLiveChatNotification(); 
                  }, 1000);          
                }
              });
          }else{


            this.timeoutid = setTimeout(() => {
              this.ServicesService.routeToSuperAdmin().subscribe(()=>{
                  (res) =>{
                      
                  }
              }); 
            }, 30000); //30000    

              Swal.fire({
                title: 'You Have Received Chat Request <br><br>' + "Chosen Language: " + res[0].language + "<br>In Queue: " + res[0].waitcount,
                timer: 60000, //60000
                confirmButtonText: 'Accept',
                allowOutsideClick: false,
              }).then((result) => {
                /* Read more about handling dismissals below */
                //console.log(result);            
                if (result.dismiss === Swal.DismissReason.timer) {
                  this.deleteLiveRequest();
                  setTimeout(() => {
                    this.checkForLiveChatNotification(); 
                  }, 1000);        
                }else{
                  //this.checkIfEnded();
                  clearTimeout(this.timeoutid);
                  this.acceptLiveRequest();
                }
              });
          }
        }
           
        this.thenotifications = res;
      },error =>{
        clearInterval(this.intervalId);
        
      }) 
  }

  checkForLiveChatNotification(){
    this.intervalId = setInterval(()=>{
      if (this.notfinish == 0){
         this.getlcn();
      }     
    },6000);
  }

  getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === "#") {
      titlee = titlee.slice(1);
    }

    for (var item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      }
    }
    return "Dashboard";
  }

  navigatePage(path: String,name="",language="") {
    if (path == 'notifications') {
      return this.router.navigate(['/global/notifications'])
    }
    else if (path == 'profile') {
      return this.router.navigate(['/global/profile'])
    }
    else if (path == 'settings') {
      return this.router.navigate(['/global/settings'])
    }
    else if (path == 'home') {
      return this.router.navigate(['/auth/login'])
    }else if (path == 'admin/chat'){
      return this.router.navigate([path],{ queryParams: { name: name, language: language} })
    }
    else{
      return this.router.navigate([path]);    }
  }

  gone(){
    this.errorMessage("Expired")
    this.checkForLiveChatNotification();
  }

  errorMessage(err) {
    let title = 'Error'
    let message = err
    this.notifyService.openToastrError(title, message)
  }  

  successMessage() {
    let title = 'Success'
    let message = 'Logging in right now'
    this.notifyService.openToastr(title, message)
  }

  logout() {
    clearInterval(this.intervalId);
    this.authService.logout().subscribe(
      (res) =>{
        this.notifyService.openToastr("Success", res.message)
        this.jwtService.destroyToken()
        this.authService.userDetail = [];
        this.navigatePage('home')
      });    
  }

  openSearch() {
    document.body.classList.add("g-navbar-search-showing");
    setTimeout(function() {
      document.body.classList.remove("g-navbar-search-showing");
      document.body.classList.add("g-navbar-search-show");
    }, 150);
    setTimeout(function() {
      document.body.classList.add("g-navbar-search-shown");
    }, 300);
  }

  closeSearch() {
    document.body.classList.remove("g-navbar-search-shown");
    setTimeout(function() {
      document.body.classList.remove("g-navbar-search-show");
      document.body.classList.add("g-navbar-search-hiding");
    }, 150);
    setTimeout(function() {
      document.body.classList.remove("g-navbar-search-hiding");
      document.body.classList.add("g-navbar-search-hidden");
    }, 300);
    setTimeout(function() {
      document.body.classList.remove("g-navbar-search-hidden");
    }, 500);
  }

  openSidebar() {
    if (document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.remove("g-sidenav-pinned");
      document.body.classList.add("g-sidenav-hidden");
      this.sidenavOpen = false;
    } else {
      document.body.classList.add("g-sidenav-pinned");
      document.body.classList.remove("g-sidenav-hidden");
      this.sidenavOpen = true;
    }
  }

  toggleSidenav() {
    if (document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.remove("g-sidenav-pinned");
      document.body.classList.add("g-sidenav-hidden");
      this.sidenavOpen = false;
    } else {
      document.body.classList.add("g-sidenav-pinned");
      document.body.classList.remove("g-sidenav-hidden");
      this.sidenavOpen = true;
    }
  }
}
