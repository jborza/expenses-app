import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { ExpensesComponent } from './expenses.component';
import { DashboardComponent } from './dashboard.component';
import { ExpenseEditorComponent } from './expense-editor.component';
import { ExpenseDetailComponent } from './expense-detail.component';

import { ExpenseService } from './expense.service';
import { CategoryService } from './category.service';

import { PageNotFoundComponent } from './pagenotfound.component';

@NgModule({
  declarations: [
      AppComponent,
      ExpensesComponent,
      PageNotFoundComponent,
      DashboardComponent,
      ExpenseEditorComponent,
      ExpenseDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [
      ExpenseService,
      CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
