import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ROUTES, ROUTESUSER } from '../../shared/menu/menu-items';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

var misc: any = {
  sidebar_mini_active: true
};

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;
  public menu;
  public userDetail: any;
  imgLogo = 'assets/img/logo/zakat-sel-logo.png'

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.getUserDetail().subscribe(
      (res) =>{
        this.userDetail = res; 
        
    if (this.userDetail.role == 1) {
      this.menu = ROUTESUSER
    }
    else if (this.userDetail.role == 2) {
      this.menu = ROUTES
    }
        this.menuItems = this.menu.filter(menuItem => menuItem);
        this.router.events.subscribe(event => {
          this.isCollapsed = true;
        });
    });
  
  }

  onMouseEnterSidenav() {
    if (!document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.add("g-sidenav-show");
    }
  }

  onMouseLeaveSidenav() {
    if (!document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.remove("g-sidenav-show");
    }
  }
  
  minimizeSidebar() {
    const sidenavToggler = document.getElementsByClassName(
      "sidenav-toggler"
    )[0];
    const body = document.getElementsByTagName("body")[0];
    if (body.classList.contains("g-sidenav-pinned")) {
      misc.sidebar_mini_active = true;
    } else {
      misc.sidebar_mini_active = false;
    }
    if (misc.sidebar_mini_active === true) {
      body.classList.remove("g-sidenav-pinned");
      body.classList.add("g-sidenav-hidden");
      sidenavToggler.classList.remove("active");
      misc.sidebar_mini_active = false;
    } else {
      body.classList.add("g-sidenav-pinned");
      body.classList.remove("g-sidenav-hidden");
      sidenavToggler.classList.add("active");
      misc.sidebar_mini_active = true;
    }
  }
}
