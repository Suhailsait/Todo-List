import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-editlist',
  templateUrl: './add-editlist.component.html',
  styleUrls: ['./add-editlist.component.css']
})
export class AddEditlistComponent implements OnInit {
  userDetails:any
  taskname:any
  task:any

  constructor(private router :Router) { }

  ngOnInit(): void {
    if(!localStorage.getItem('loginUser')){
      this.router.navigateByUrl("")
    }{
      this.userDetails=JSON.parse(localStorage.getItem('loginUser') || '')
    }
  }
  submit(){
    this.userDetails[0].todolist.push({taskname:this.taskname,task:this.task})
    this.router.navigateByUrl("dashboard")
  }

}
