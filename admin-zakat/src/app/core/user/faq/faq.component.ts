import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  selectedDay: string = '';

  selectChangeHandler (event: any) {
    //update the ui
    this.selectedDay = event.target.value;
  }


  constructor() { }

  ngOnInit() {
  }

}
