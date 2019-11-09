import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-auth-user',
  templateUrl: './auth-user.component.html',
  styleUrls: ['./auth-user.component.css']
})
export class AuthUserComponent {

  constructor() { }

  @Input() newUser

  authUser = {
    email: '',
    password: ''
  }

  LogInForm() {
    const findUser = this.newUser.find(user => {
      return this.authUser.email === user.email && this.authUser.password === user.password
    })
    findUser ? alert('Welcome') : alert('Such user is not found');
  }
}
