import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { Layout } from './components/layout/layout';
import { Leave } from './pages/leave/leave';
import { Employee } from './pages/employee/employee';
import { PageNotFound } from './pages/page-not-found/page-not-found';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: '',
        component: Layout,
        children: [
            {
                path: 'dashboard',
                component: Dashboard
            },
            {
                path: 'employees',
                component: Employee
            },
            {
                path: 'leaves',
                component: Leave
            }
        ]
    },
    {
        path: '**',
        component: PageNotFound
    }
];
