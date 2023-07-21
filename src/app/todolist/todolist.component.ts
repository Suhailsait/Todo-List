import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import {CdkDragDrop, moveItemInArray, CdkDrag, CdkDropList} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  list: any
  notintiate: any
  complete:any
  @Input() loginuser: any
  @Output() editlist = new EventEmitter<any>();
  @Output() deletelist = new EventEmitter<any>();
  @Output() changeStatus = new EventEmitter<any>();
  @Output() updateUser = new EventEmitter<any>;

  statusList:any=[
    "Not Intiated",
    "Intiated",
    "Completed"
]

  constructor(private router: Router) { }

  ngOnInit(): void {
       this.status()
  }

  status(){
    this.list = this.loginuser[0].todolist
    this.notintiate = this.list.filter((element: any) =>element.status == 'Not Intiated').length
    this.complete = this.list.filter((element: any) =>element.status == 'Completed').length 
  }

  edit(index: any, item: any) {
    this.editlist.emit(index);
  }
  delete(index: any, item: any) {
    this.loginuser[0].todolist.splice(index, 1)
    this.deletelist.emit(this.loginuser)
    this.status()
  }

  statusChange(event:any,index:any){
    this.loginuser[0].todolist[index].status = event.target.value
    this.changeStatus.emit(this.loginuser)
    this.status()
  }

  drop(event: CdkDragDrop<unknown>) {    
    moveItemInArray(this.loginuser[0].todolist, event.previousIndex, event.currentIndex);
    this.updateUser.emit(this.loginuser)
  }


}
