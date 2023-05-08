import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  users: Array <any> = [];

  constructor() {}

  addUser(data: any): void {
    this.users.push(data)
    localStorage.setItem('userList', JSON.stringify(this.users));
  }

  deleteUser(index: number): void {
    this.users.splice(index, 1);

    localStorage.setItem('userList', JSON.stringify(this.users));
  }

  findIndex(data: any) {
    const index = this.users.findIndex((item) => item === data);
    return index;
  }

  getUser(): Array<any> {
    this.users = JSON.parse(localStorage.getItem('userList') || '');
    return this.users;
  }
}
