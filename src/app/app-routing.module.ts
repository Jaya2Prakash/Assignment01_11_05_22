import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  {path:'first',component:FirstComponent},
  {path:'task',component:TaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
