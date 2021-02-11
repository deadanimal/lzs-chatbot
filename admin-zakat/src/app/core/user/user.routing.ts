import { MyaccountComponent } from './myaccount/myaccount.component';
import { FaqComponent } from './faq/faq.component';
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

export const UserRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'faq',
                component: FaqComponent
            },
            {
                path: 'myaccount',
                component: MyaccountComponent
            },
            
        ]
    }
]