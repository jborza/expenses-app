import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Expense } from './expense';
import { ExpenseService } from './expense.service';
import { CategoryService } from './category.service';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'expense-editor',
    templateUrl: 'expense-editor.component.html'
})
export class ExpenseEditorComponent implements OnInit {
    private expense: Expense;
    private categories: string[];

    constructor(
        private expenseService: ExpenseService,
        private categoryService: CategoryService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.route.params.switchMap((params: Params) => this.expenseService.getExpense(+params['id']))
            .subscribe(item => this.expense = item);
        this.categoryService.getCategories().then(d => this.categories = d);
    }

    parseDate(dateString: string): Date {
        if (dateString) {
            return new Date(dateString);
        } else {
            return null;
        }
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        //this.expenseService.update(this.expense)
        //    .then(() => this.goBack());
    }
}