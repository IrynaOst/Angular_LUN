import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  constructor() { }

  @Input() newUser;

  registeredUser = {
    name: '',
    password: '',
    email: '',
    city: '',
    is_blocked: Math.random() >= 0.5
  }

  singInForm() {
    this.newUser.push (
      this.registeredUser.name, 
      this.registeredUser.password,
      this.registeredUser.email,
      this.registeredUser.city,
      this.registeredUser.is_blocked
    );
    alert("You are registered. Thank you for joining us");
  }
}
