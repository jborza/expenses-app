import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Expense } from './expense';

@Component({
    selector: 'expense-detail',
    templateUrl: 'expense-detail.component.html'
})
export class ExpenseDetailComponent{
    @Input()
    expense: Expense;

    constructor(
        private router: Router
    ) { }

    goToDetail(): void {
        this.router.navigate(['/detail', this.expense.id]);
    }
}