import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  signupForm: FormGroup = new FormGroup({});
  users: Array<any> = [];
  temp: Array<any> = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private ds: ServiceService
  ) {
    this.signupForm = this.fb.group(
      {
        username: new FormControl('', [
          Validators.required,
          Validators.pattern('[a-zA-Z ]*'),
        ]),
        email: new FormControl('', [
          Validators.required,
          Validators.pattern('[[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$]*'),
          Validators.email,
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.pattern('[a-zA-Z0-9]*'),
        ]),
        confirmpassword: new FormControl('', [Validators.required]),
      },
      { validators: this.MustMatch('password', 'confirmpassword') }
    );
  }

  ngOnInit(): void {
    if (!localStorage.getItem('userList') == true) {
      localStorage.setItem('userList', JSON.stringify(this.users));
    } else {
      this.users = JSON.parse(localStorage.getItem('userList') || '');
    }
  }

  MustMatch(password: any, confirmpassword: any) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmpasswordControl = formGroup.controls[confirmpassword];

      if (
        confirmpasswordControl.errors &&
        !confirmpasswordControl.errors['mismatch']
      ) {
        return;
      }

      passwordControl.value !== confirmpasswordControl.value
        ? confirmpasswordControl.setErrors({ mismatch: true })
        : confirmpasswordControl.setErrors(null);
    };
  }

  signup() {
    const { username, email, password } = this.signupForm.value;

    const todolist: Array<any> = [];
    const data = { username, email, password, todolist };
    if (this.signupForm.valid) {
      if (this.users.length == 0) {
        this.users.push(data)
        this.ds.addUser(this.users);
        alert("User Added Successfully")
        this.router.navigateByUrl("");
      } else {
        const foundvalue = this.users.filter((user) => user.email == email)
        if (foundvalue.length != 0) {
          alert("Already Existing User")
          this.router.navigateByUrl("");
        } else {
          this.users.push(data)
          this.ds.addUser(this.users);
          alert("User Added Successfully")
          this.router.navigateByUrl("");
        }
      }
    } else {
      alert('Invalid Form');
    }
  }
}
