import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpensesComponent } from './expenses.component';
import { PageNotFoundComponent } from './pagenotfound.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
    {
        path: 'expenses',
        component: ExpensesComponent
    },
    {
        path: 'dashboard',
        component:DashboardComponent
    },
    //{
    //    path: 'detail/:id',
    //    component: ExpenseDetailComponent
    //},
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
