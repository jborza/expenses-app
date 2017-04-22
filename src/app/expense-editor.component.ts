import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Expense } from './expense';
import { ExpenseService } from './expense.service';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'expense-editor',
    templateUrl: 'expense-editor.component.html'
})
export class ExpenseEditorComponent implements OnInit {
    private expense: Expense;

    constructor(
        private expenseService: ExpenseService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.route.params.switchMap((params: Params) => this.expenseService.getExpense(+params['id']))
            .subscribe(item => this.expense = item);
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        //this.expenseService.update(this.expense)
        //    .then(() => this.goBack());
    }
}