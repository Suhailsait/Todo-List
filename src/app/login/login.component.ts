import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users:any

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

  constructor(private fb: FormBuilder,private router : Router) { }

  ngOnInit(): void {
  }

  login(){
    this.users = JSON.parse(localStorage.getItem('userList') || '');
    const { email, password } = this.loginForm.value;
    if (this.loginForm.valid) {
      const foundValue = this.users.filter((element:any) => element.email === email);
      console.log(foundValue);
      if(foundValue[0].email === email){
        if (foundValue[0].password ===password) {
          this.router.navigateByUrl("dashboard")
          localStorage.setItem('loginUser', JSON.stringify(foundValue));
        } else {
          alert("Invalid Password")
        }
        
    } else {
      alert("Invalid Email")
    }
  }
}

}
