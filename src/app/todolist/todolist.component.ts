import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  userDetails:any
  list:any
  constructor(private router:Router) { }

  ngOnInit(): void {
    if(!localStorage.getItem('loginUser')){
      this.router.navigateByUrl("")
    }{
      this.userDetails=JSON.parse(localStorage.getItem('loginUser') || '')
      this.list = this.userDetails[0].todolist
    }
  }

}
