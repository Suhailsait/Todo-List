import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  list:any
  @Input() loginuser:any

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.list = this.loginuser[0].todolist
  }

}
