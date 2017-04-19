import { Component, OnInit } from '@angular/core';

import { Expense } from './expense';
import { ExpenseService } from './expense.service';

@Component({
    selector: 'expenses',
    templateUrl: 'expenses.component.html',
    //styleUrls:['app/expenses.component.css']
})
export class ExpensesComponent implements OnInit {
    constructor(private expenseService: ExpenseService) {
    }

    categories = ['Car', 'Food', 'Wardrobe', 'Home', 'Personal', 'Amusement'];
    expenses: Expense[];
    expense: Expense;
    
    getExpenses(){
        this.expenseService.getExpenses().then(expenses => this.expenses = expenses);
    }

    ngOnInit(): void {
        this.getExpenses();    
    }

    parseDate(dateString: string): Date {
        if (dateString) {
            return new Date(dateString);
        } else {
            return null;
        }
    }

    onSelect(expense: Expense): void {
        this.expense = expense;
    }

    get diagnostic() {
        return JSON.stringify(this.expense);
    }
}