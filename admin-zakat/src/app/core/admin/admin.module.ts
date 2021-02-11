import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  AccordionModule,
  BsDropdownModule,
  ModalModule,
  ProgressbarModule,
  TabsModule,
  TooltipModule,
} from "ngx-bootstrap";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { LoadingBarModule } from "@ngx-loading-bar/core";
import { NgxSpinnerModule } from "ngx-spinner";
//import { CsvModule } from "@ctrl/ngx-csv";
import { RouterModule } from "@angular/router";
import { AdminRoutes } from "./admin.routing";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ManagementAuditComponent } from "./management-audit/management-audit.component";
import { ManagementUserComponent } from "./management-user/management-user.component";
import { userstatisticComponent } from "./report/us/userstatistic.component";
import { userratingComponent } from "./report/ur/userrating.component";
import { livechathistoryComponent } from "./report/lch/livechathistory.component";
import { BotComponent } from "./management/bot/bot.component";
import { ChatComponent } from "./chat/chat.component";
import { dynamicvariableComponent } from "./management/dynamicvariable/dynamicvariable.component";
import { botsubcategoryComponent } from "./management/botsubcategory/botsubcategory.component";

@NgModule({
  declarations: [
    DashboardComponent,
    ManagementAuditComponent,
    ManagementUserComponent,
    userstatisticComponent,
    userratingComponent,
    BotComponent,
    ChatComponent,
    dynamicvariableComponent,
    botsubcategoryComponent,
    livechathistoryComponent,
  ],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    // CsvModule,
    FormsModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    LoadingBarModule,
    NgxDatatableModule,
    RouterModule.forChild(AdminRoutes),
  ],
})
export class AdminModule {}
