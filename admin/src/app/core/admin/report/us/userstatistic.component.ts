import {
  Component,
  OnInit,
  OnDestroy,
  NgZone,
  TemplateRef,
} from "@angular/core";

import { ServicesService } from "src/app/shared/services/services/service.service";
import { NgxSpinnerService } from "ngx-spinner";
import * as xlsx from "xlsx";
import * as moment from "moment";
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";

@Component({
  selector: "app-userstatistic",
  templateUrl: "./userstatistic.component.html",
  styleUrls: ["./userstatistic.component.scss"],
})
export class userstatisticComponent implements OnInit {
  tableTemp = [];
  dateRange: string;
  ex_daterange: string;
  isHidden: boolean = false;

  // Datepicker
  bsDPConfig = {
    isAnimated: true,
    containerClass: "theme-default",
  };

  constructor(
    private SS: ServicesService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    // this.getData();
  }

  setDate(event) {
    console.log(event);
  }

  exportExcel() {
    //this.isHidden = false;
    //this.spinner.show();
    let fileName =
      this.ex_daterange[0] + " to " + this.ex_daterange[1] + ".xlsx";
    let element = document.getElementById("reportTable");
    const ws: xlsx.WorkSheet = xlsx.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, "Sheet1");

    /* save to file */
    xlsx.writeFile(wb, fileName);
    // this.spinner.hide();
    // setTimeout(() => {
    //   this.isHidden = true;
    // }, 100);
  }

  exportPdf() {
    var rows = [];

    rows.push([
      "Date",
      "Total User",
      "Average Time Spent(sec)",
      "Average Waiting Time(sec)",
      "Average Rating",
      "Top 1",
      "Top 2",
      "Top 3",
      "Top 4",
      "Top 5",
    ]);

    this.tableTemp.forEach((x) => {
      console.log(x);

      rows.push([
        x.date,
        x.totalUser,
        x.averageSpent,
        x.averageWait,
        x.averageRating,
        x.top_1,
        x.top_2,
        x.top_3,
        x.top_4,
        x.top_5,
      ]);
    });

    var dd = {
      content: [
        this.ex_daterange[0] + " to " + this.ex_daterange[1] + ".xlsx",
        " ",
        {
          table: {
            widths: [
              "10%",
              "10%",
              "10%",
              "10%",
              "10%",
              "10%",
              "10%",
              "10%",
              "10%",
              "10%",
            ],
            body: rows,
          },
        },
      ],
      defaultStyle: {
        fontSize: 8,
      },
    };
    (<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
    pdfMake
      .createPdf(dd)
      .download(this.ex_daterange[0] + " to " + this.ex_daterange[1] + ".pdf");
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
        "us",
        moment(this.dateRange[0]).format("YYYY-MM-DD"),
        moment(this.dateRange[1]).format("YYYY-MM-DD")
      ).subscribe((res) => {
        this.tableTemp = res;
        this.spinner.hide();
        this.ex_daterange = this.dateRange;
        this.dateRange = undefined;
      });
    }
  }
}
