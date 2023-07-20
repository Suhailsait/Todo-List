import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loginUser:any;
  allUser:any;
  editList:any
  allList:any
  listView:boolean = true;
  addList :boolean = false;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.allUser = JSON.parse(localStorage.getItem('userList') || '')
    if(!localStorage.getItem('loginUser')){
      this.router.navigateByUrl("")
    }else{
      this.loginUser=JSON.parse(localStorage.getItem('loginUser') || '')
    }
    this.allList = this.loginUser[0].todolist
  }


  listview(){
    this.listView = true;
    this.addList = false;
  }
  editview(){
    this.listView = false;
    this.addList = true;
  }

  onChange(event:any){
    this.loginUser = event;
    this.changetodo(); 
    localStorage.setItem('loginUser', JSON.stringify(this.loginUser)); 
    this.editList = null  
  }


  changetodo(){
    const foundIndex = this.allUser.findIndex((element: any) => element.email == this.loginUser[0].email);
    this.allUser[foundIndex] = this.loginUser[0]
    localStorage.setItem('userList', JSON.stringify(this.allUser));
    this.listview();
  }

  edit(event?:any){      
    this.editList = {todo : this.allList[event],index :event} 
    this.editview()   
  }

  delete(event:any){
    this.loginUser = event;
    this.changetodo(); 
    localStorage.setItem('loginUser', JSON.stringify(this.loginUser));
  }
  statusChange(event:any){
    this.loginUser = event;
    this.changetodo(); 
    localStorage.setItem('loginUser', JSON.stringify(this.loginUser));
  }

  logout(){
    localStorage.removeItem("loginUser");
    if(!localStorage.getItem('loginUser')){
      this.router.navigateByUrl("")
    }
  }

}
