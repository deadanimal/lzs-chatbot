import { Routes } from '@angular/router';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetComponent } from './reset/reset.component';

export const AuthRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'forgot',
                component: ForgotComponent
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'reset',
                component: ResetComponent
            }
            // {
            //     path: 'register',
            //     component: RegisterComponent
            // }
        ]
    }
]