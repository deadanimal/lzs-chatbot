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
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import * as moment from "moment";
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";


@Component({
  selector: "app-livechathistory",
  templateUrl: "./livechathistory.component.html",
  styleUrls: ["./livechathistory.component.scss"],
})
export class livechathistoryComponent implements OnInit {
  tableTemp = [];
  table2 = [];
  dateRange: string;
  ex_daterange: string;
  isHidden: boolean = false;
  clientid: number;

  // Datepicker
  bsDPConfig = {
    isAnimated: true,
    containerClass: "theme-default",
  };

  modal: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: "modal-dialog-centered modal-lg",
  };

  constructor(
    private SS: ServicesService,
    private spinner: NgxSpinnerService,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    // this.getData();
  }

  exportExcel(table) {
    let fileName =
      this.ex_daterange[0] + " to " + this.ex_daterange[1] + ".xlsx";
    let element = document.getElementById(table);
    const ws: xlsx.WorkSheet = xlsx.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, "Sheet1");

    /* save to file */
    xlsx.writeFile(wb, fileName);
  }

  exportExcelSub(id,email) {
    this.spinner.show();
    this.SS.giveReport(
      "lch2",
      moment(this.dateRange[0]).format("YYYY-MM-DD"),
      moment(this.dateRange[1]).format("YYYY-MM-DD"),
      id
    ).subscribe((res) => {
      this.clientid = id;
      this.table2 = res;
     
      this.ex_daterange = this.dateRange;

      setTimeout(() => { 
        this.spinner.hide();
        let fileName =
            email + ".xlsx";
          let element = document.getElementById("reportTableChat");
          const ws: xlsx.WorkSheet = xlsx.utils.table_to_sheet(element);
  
          /* generate workbook and add the worksheet */
          const wb: xlsx.WorkBook = xlsx.utils.book_new();
          xlsx.utils.book_append_sheet(wb, ws, "Sheet1");
  
          /* save to file */
          xlsx.writeFile(wb, fileName);
      }, 100);

      
    });
    
  }

  exportPdf(flag,id=0,mail="") {
    var rows = [];

    if (flag == "main") {
      rows.push([
        "Accepted Date",
        "Accepted Time",
        "Name",
        "Email",
        "Phone Number",
        "Agent Email",
        "Chosen Language",
      ]);

      this.tableTemp.forEach((x) => {
        rows.push([
          x.attendtime,
          x.attendtime.split(" ")[1],
          x.name,
          x.email,
          x.phonenumber,
          x.emel,
          x.languageOfChoice,
        ]);
      });

      var dd = {
        content: [
          this.ex_daterange[0] + " to " + this.ex_daterange[1] + ".xlsx",
          " ",
          {
            table: {
              widths: ["10%", "10%", "10%", "15%", "10%", "15%", "10%"],
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
        .download(
          this.ex_daterange[0] + " to " + this.ex_daterange[1] + ".pdf"
        );
    }

    if (flag == "sub") {

      this.spinner.show();

      this.SS.giveReport(
        "lch2",
        moment(this.dateRange[0]).format("YYYY-MM-DD"),
        moment(this.dateRange[1]).format("YYYY-MM-DD"),
        id
      ).subscribe((res) => {
        this.table2 = res;
       
        this.ex_daterange = this.dateRange;

         rows.push([
          "Sent Date",
          "Sent Time",
          "Client",
          "Agent",
        ]);

         this.table2.forEach((x) => {
         rows.push([
          x.created_at.split(" ")[0],
          x.created_at.split(" ")[1],
          x.clientId == id ? x.message : "",
          x.agentMsg === undefined ? "" : x.agentMsg      
        ]);
      });
      this.spinner.hide();

          var dd = {
        content: [
          " ",
          {
            table: {
              widths: ["20%", "20%", "20%", "20%"],
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
        .download(
         mail + ".pdf"
        );

      }) 
    }
  }

  closeModal() {
    this.modal.hide();
  }

  openModal(modalRef: TemplateRef<any>, id) {
    this.spinner.show();
    this.clientid = id;

    this.SS.giveReport(
      "lch2",
      moment(this.dateRange[0]).format("YYYY-MM-DD"),
      moment(this.dateRange[1]).format("YYYY-MM-DD"),
      id
    ).subscribe((res) => {
      this.table2 = res;
      this.spinner.hide();
      this.ex_daterange = this.dateRange;
    });
    this.modal = this.modalService.show(modalRef, this.modalConfig);
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
        "lch",
        moment(this.dateRange[0]).format("YYYY-MM-DD"),
        moment(this.dateRange[1]).format("YYYY-MM-DD")
      ).subscribe((res) => {
        this.tableTemp = res;
        this.spinner.hide();
        this.ex_daterange = this.dateRange;
      });
    }
  }
}
