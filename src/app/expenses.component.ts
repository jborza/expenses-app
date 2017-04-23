import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Expense } from './expense';
import { ExpenseService } from './expense.service';

@Component({
    selector: 'expenses',
    templateUrl: 'expenses.component.html',
    //styleUrls:['app/expenses.component.css']
})
export class ExpensesComponent implements OnInit {
    constructor(
        private expenseService: ExpenseService,
        private router: Router) {    }

    expenses: Expense[];
    expense: Expense;
    
    getExpenses(){
        this.expenseService.getExpenses().then(expenses => this.expenses = expenses);
    }

    ngOnInit(): void {
        this.getExpenses();    
    }

    onSelect(expense: Expense): void {
        this.expense = expense;
    }

    goToDetail(): void {
        this.router.navigate(['/detail', this.expense.id]);
    }

}