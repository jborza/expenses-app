import { Component } from '@angular/core';

import { Expense } from './expense';

@Component({
    selector: 'expenses',
    templateUrl: 'expenses.component.html',
    //styleUrls:['app/expenses.component.css']
})
export class ExpensesComponent {
    categories = ['Car', 'Food', 'Wardrobe', 'Home', 'Personal', 'Amusement'];

    constructor() {
        let x = new Expense();
        x.description = "haha";
    }

    expense: Expense = {
        id: 1,
        amount: 3.99,
        description: 'Lunch',
        category: 'Food',
        date: new Date("March 16 2017, 12:00")
    };

    parseDate(dateString: string): Date {
        if (dateString) {
            return new Date(dateString);
        } else {
            return null;
        }
    }

    get diagnostic() {
        return JSON.stringify(this.expense);
    }
}