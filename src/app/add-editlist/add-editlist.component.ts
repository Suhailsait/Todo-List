import { Component, EventEmitter, Input, OnInit, Output,ComponentRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-editlist',
  templateUrl: './add-editlist.component.html',
  styleUrls: ['./add-editlist.component.css']
})
export class AddEditlistComponent implements OnInit {
  allUser: any
  Todoform: FormGroup;
  index: any = null
  @Input() loginuser: any
  @Input() editlist: any = null
  @Output() updateUser = new EventEmitter<any>;


  constructor(private router: Router, private fb: FormBuilder) {
    this.Todoform = this.fb.group({
      taskname: ['', Validators.required],
      task: ['', Validators.required],
      status: ['Not Intiated', Validators.required]
    })
  }

  ngOnInit(): void {   
     
    if (this.editlist != null) {
      this.index = this.editlist.index
      this.Todoform.patchValue({
        taskname: this.editlist.todo.taskname,
        task: this.editlist.todo.task,
        status: this.editlist.todo.status
      })
    }
  }

  submit() {
    if (this.Todoform.valid) {
      if (this.index != null) {
        this.loginuser[0].todolist.splice(this.index, 1, this.Todoform.value)
      } else {
        this.loginuser[0].todolist.push(this.Todoform.value)
      }
      this.updateUser.emit(this.loginuser)
    } else {
      alert("Enter values in field")
    }
  }

  ngOnDestroy(){
    this.Todoform.reset();    
  }


}
