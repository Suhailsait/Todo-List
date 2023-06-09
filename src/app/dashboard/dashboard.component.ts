import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userDetails:any

  constructor(private router:Router) { }

  ngOnInit(): void {
    if(!localStorage.getItem('loginUser')){
      this.router.navigateByUrl("")
    }{
      this.userDetails=JSON.parse(localStorage.getItem('loginUser') || '')
    }
  }

}
