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
  courseUSD: number;

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

  courseUSDtuUAH = fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
    .then(value => value.json())
    .then(jsonedValue => {
      const USD = jsonedValue.find(currency => {
        if(currency.ccy == 'USD') return currency.sale;
      });
      this.courseUSD = USD.sale;
    });

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
}
