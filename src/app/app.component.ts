import { Component } from '@angular/core';
import { IUserModel, IHouseModel } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputedValue: string = '';
  changeValue: string = '';
  statusReg: boolean = false;
  statusLog: boolean = false;
  createHouse: boolean = false;
  showFullIndex: number;
  showMore: boolean = false;

  users: IUserModel[] = [
    {
      name: 'Ira',
      password: '12345',
      email: 'irusya@gmail.com',
      city: 'Lviv',
      is_blocked: false
    },
    {
      name: 'Roma',
      password: '45643',
      email: 'roman@gmail.com',
      city: 'Rivne',
      is_blocked: false
    },
    {
      name: 'Vika',
      password: 'fhedfv222',
      email: 'vikusya@gmail.com',
      city: 'Kyiv',
      is_blocked: true
    },
    {
      name: 'Dima',
      password: '999777',
      email: 'dimonchik@gmail.com',
      city: 'Lviv',
      is_blocked: false
    }
  ]

  houses: IHouseModel[] = [
    {
      id: 1,
      city: 'Lviv',
      price: 68000,
      street: 'Bandery',
      square: 81,
      rooms: 3,
      user: this.users[0]
    },
    {
      id: 2,
      city: 'Lviv',
      price: 96000,
      street: 'Pasichna',
      square: 103,
      rooms: 4,
      user: this.users[1]
    },
    {
      id: 3,
      city: 'Rivne',
      price: 39000,
      street: 'Hoholya',
      square: 49,
      rooms: 2,
      user: this.users[2]
    },
    {
      id: 4,
      city: 'Kyiv',
      street: 'Franka',
      square: 78,
      price: 87000,
      rooms: 3,
      user: this.users[3]
    },
  ]

  registeredUser = {
    name: '',
    password: '',
    email: '',
    city: '',
    is_blocked: Math.random() >= 0.5
  }

  authUser = {
    email: '',
    password: ''
  }

  createdHouse = {
    id: this.houses.length+1,
    city: '',
    price: undefined,
    street: '',
    square: undefined,
    rooms: undefined,
    user: this.users[Math.floor(Math.random()*this.users.length)]
  }

  searchClick() {
    this.changeValue = this.inputedValue;
  }

  onInput(ev) {
    this.inputedValue = ev.target.value;
  }
  
  register() {
    this.statusReg = !this.statusReg;
    this.statusLog = false;
    this.createHouse = false;
  }

  login() {
    this.statusLog = !this.statusLog;
    this.statusReg = false;
    this.createHouse = false;
  } 

  addHouse() {
    this.createHouse = !this.createHouse;
    this.statusReg = false;
    this.statusLog = false;
  }

  showFullInfo(id: number) {
    this.showFullIndex = id;
    this.showMore = !this.showMore;
  }

  singInForm() {
    this.users.push(this.registeredUser);
    alert("You are registered. Thank you for joining us");
  }

  LogInForm() {
    const findUser = this.users.find(user => {
      return this.authUser.email === user.email && this.authUser.password === user.password
    })
    findUser ? alert('Welcome') : alert('Such user is not found');
  }

  createHouseForm() {
    this.houses.push(this.createdHouse);
    alert("Your house was created!");
  }
  
}
