import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { ExpensesComponent } from './expenses.component';
import { DashboardComponent } from './dashboard.component';
import { ExpenseEditorComponent } from './expense-editor.component';

import { ExpenseService } from './expense.service';

import { PageNotFoundComponent } from './pagenotfound.component';

@NgModule({
  declarations: [
      AppComponent,
      ExpensesComponent,
      PageNotFoundComponent,
      DashboardComponent,
      ExpenseEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [
      ExpenseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
