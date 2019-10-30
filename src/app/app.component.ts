import { Component } from '@angular/core';

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
  houses = [
    {
      city: 'Lviv',
      street: 'Bandery',
      square: 81,
      price: 68000
    },
    {
      city: 'Lviv',
      street: 'Pasichna',
      square: 103,
      price: 96000
    },
    {
      city: 'Rivne',
      street: 'Hoholya',
      square: 49,
      price: 39000
    },
    {
      city: 'Kyiv',
      street: 'Franka',
      square: 78,
      price: 87000
    },
  ]

  searchClick() {
    this.changeValue = this.inputedValue;
  }

  onInput(ev) {
    this.inputedValue = ev.target.value;
  }
  
  register() {
    this.statusReg = !this.statusReg;
    this.statusLog = false;
  }

  login() {
    this.statusLog = !this.statusLog;
    this.statusReg = false;
  }
  
}