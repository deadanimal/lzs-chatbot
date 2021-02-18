import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { ServicesService } from "src/app/shared/services/services/service.service";
import * as moment from 'moment';
import { NgxSpinnerService } from "ngx-spinner";

export enum SelectionType {
  single = 'single',
  multi = 'multi',
  multiClick = 'multiClick',
  cell = 'cell',
  checkbox = 'checkbox'
}

@Component({
  selector: 'app-management-audit',
  templateUrl: './management-audit.component.html',
  styleUrls: ['./management-audit.component.scss']
})
export class ManagementAuditComponent implements OnInit {

  // Table
  tableEntries: number = 5;
  tableSelected: any[] = [];
  tableTemp = [];
  tableActiveRow: any;
  tableRows:[] = []
  dateRange: string;
  SelectionType = SelectionType;

  constructor(
    private SS: ServicesService,
    private spinner: NgxSpinnerService
  ) {
  }

  ngOnInit() {

  }

  getData() {
      if (this.dateRange === undefined) {
        alert("Date Range is required");
      } else if (this.dateRange[0] === null) {
        alert("Date Range is required");
      } else {
        this.spinner.show();
        //console.log(moment(this.dateRange[0]).format("YYYY-MM-DD"));
        this.SS.giveReport(
          "audit",
          moment(this.dateRange[0]).format("YYYY-MM-DD"),
          moment(this.dateRange[1]).format("YYYY-MM-DD")
        ).subscribe((res) => {
          this.tableTemp = res;
          console.log(this.tableTemp);
          
          this.spinner.hide();
        });
      }
  }

}
