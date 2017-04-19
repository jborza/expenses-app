import { Component, OnInit } from '@angular/core';

import { ExpenseService } from './expense.service';
import { Expense } from './expense';
import * as _ from 'lodash';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    expenses: Expense[];
    expensesByCategory: any[];
    expensesByDay: any[];

    constructor(private expenseService: ExpenseService) {

    }

    ngOnInit(): void {
        this.expenseService.getExpenses().then(data => {
            this.groupData(data);
        }
        );
    }

    groupData(data: Expense[]) {
        this.expenses = data;

        this.expensesByCategory = _(this.expenses)
            .groupBy(x => x.category)
            .toPairs()
            .map(p => ({ name: p[0], sum: _.sumBy(p[1], n => n.amount)}))
            .value();
        //this.expensesByCategory = _.groupBy(this.expenses, item => item.category);

        //this.expensesByDay = _.groupBy(this.expenses, item => Math.floor(item.date.getTime() / (1000 * 60 * 60 / 24)));
        console.log(this.expensesByCategory);
        //console.log(this.expensesByDay);
    }

}

