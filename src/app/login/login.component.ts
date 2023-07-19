import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: any

  loginForm = this.fb.group({
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('[[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$]*'),
        Validators.email,
      ],
    ],
    password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
  });

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.users = JSON.parse(localStorage.getItem('userList') || '');
  }

  login() {
    const { email, password } = this.loginForm.value;
    if (this.loginForm.valid) {
      const foundValue = this.users.filter((element: any) => element.email === email);
      if (foundValue.length != 0) {
        if (foundValue[0].password == password) {
          localStorage.setItem('loginUser', JSON.stringify(foundValue));
          this.router.navigateByUrl("dashboard")
        } else {
          alert("Invalid Password")
        }
      } else {
        alert("No user Found")
      }
    } else {
      alert("Invalid form")
    }
  }

}
