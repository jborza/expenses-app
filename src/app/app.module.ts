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

import { NavbarComponent } from './navbar.component';

@NgModule({
  declarations: [
      AppComponent,
      ExpensesComponent,
      PageNotFoundComponent,
      DashboardComponent,
      ExpenseEditorComponent,
      ExpenseDetailComponent,
      NavbarComponent
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
