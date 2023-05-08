import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodolistComponent } from './todolist/todolist.component';
import { AddEditlistComponent } from './add-editlist/add-editlist.component';

const routes: Routes = [

  {path:"",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"dashboard",component:DashboardComponent,children:[
    {path:"",redirectTo:"todolist",pathMatch:"full"},
    {path:"todolist",component:TodolistComponent},
    {path:"formlist",component:AddEditlistComponent},
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
