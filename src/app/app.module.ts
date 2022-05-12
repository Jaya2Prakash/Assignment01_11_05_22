import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import {  MyFilterValue, MyFilterValue1 } from './myfilter';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    MyFilterValue,
    MyFilterValue1,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
