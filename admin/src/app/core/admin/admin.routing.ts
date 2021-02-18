import { Routes, CanActivateChild } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ManagementAuditComponent } from "./management-audit/management-audit.component";
import { ManagementUserComponent } from "./management-user/management-user.component";
import { BotComponent } from "./management/bot/bot.component";
import { dynamicvariableComponent } from "./management/dynamicvariable/dynamicvariable.component";
import { botsubcategoryComponent } from "./management/botsubcategory/botsubcategory.component";
import { ChatComponent } from "./chat/chat.component";
import { userstatisticComponent } from "./report/us/userstatistic.component";
import { userratingComponent } from "./report/ur/userrating.component";
import { livechathistoryComponent } from "./report/lch/livechathistory.component";
import { AuthGuard } from "../../shared/guard/auth.guard";

export const AdminRoutes: Routes = [
  {
    path: "",
    canActivateChild: [AuthGuard],
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
      },
      {
        path: "management",
        children: [
          {
            path: "audit-trails",
            canActivate: [AuthGuard],
            component: ManagementAuditComponent,
          },
          {
            path: "user",
            canActivate: [AuthGuard],
            component: ManagementUserComponent,
          },
          {
            path: "bot",
            component: BotComponent,
          },
          {
            path: "dynamic-variables",
            component: dynamicvariableComponent,
          },
          {
            path: "botsubcategory",
            component: botsubcategoryComponent,
          },
        ],
      },
      {
        path: "report",
        children: [
          {
            //path: 'live-chat-history',
            path: "user-statistic",
            component: userstatisticComponent,
          },
          {
            path: "live-chat-history",
            component: livechathistoryComponent,
          },
          {
            path: "user-rating",
            component: userratingComponent,
          },
        ],
      },
      {
        path: "chat",
        component: ChatComponent,
      },
    ],
  },
];
