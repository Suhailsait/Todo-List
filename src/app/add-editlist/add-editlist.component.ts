import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-editlist',
  templateUrl: './add-editlist.component.html',
  styleUrls: ['./add-editlist.component.css']
})
export class AddEditlistComponent implements OnInit {
  allUser:any
  Todoform:FormGroup;
  @Input() loginuser:any
  @Output() updateUser = new EventEmitter<any>();


  constructor(private router :Router,private fb:FormBuilder) { 
    this.Todoform = this.fb.group({
      taskname:['',Validators.required],
      task:['',Validators.required],
      status:['Intiated',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  submit(){
      if(this.Todoform.valid){
        this.loginuser[0].todolist.push(this.Todoform.value)
        this.updateUser.emit(this.loginuser)
      }else{
        alert("Enter values in field")
      }
      
  }

}
