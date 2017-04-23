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
        console.log(data);

        var test = _(data).groupBy(x => x.category).toPairs().value();
        console.log(test);

        this.expensesByCategory = _(data)
            .groupBy(x => x.category)
            .toPairs()
            .map(p => ({ name: p[0], sum: _.sumBy(p[1] as Expense[], n => n.amount)}))
            .value();
        
        this.expensesByDay = _(data)
            .groupBy(x => x.dateIso())
            .toPairs()
            .map(p => ({ day: p[0], sum: _.sumBy(p[1] as Expense[], n => n.amount)}))
            .value();

        console.log(this.expensesByDay);
    }

}

