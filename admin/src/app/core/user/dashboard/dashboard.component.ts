import { Component, OnInit } from '@angular/core';
import { NgxFreshChatService } from 'ngx-freshchat';

const FC_TOKEN = "66be7290-cfe1-4a79-93b5-f76fb00c8b37"
const FC_URL = "https://wchat.freshchat.com"

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private chat: NgxFreshChatService
  ) { 
    
  }

  ngOnInit() {
    this.chat.init({
      token: FC_TOKEN,
      host: FC_URL
    })
      .subscribe(
        () => console.log('FreshChat is ready!')
      );
  }

}
