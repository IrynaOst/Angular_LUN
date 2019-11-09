import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-create-house',
  templateUrl: './create-house.component.html',
  styleUrls: ['./create-house.component.css']
})
export class CreateHouseComponent {

  constructor() { }

  @Input() newHouse;
  @Input() newUser;

  createdHouse = {
    id: undefined,
    city: '',
    price: undefined,
    street: '',
    square: undefined,
    rooms: undefined,
    user: ''
  }

  createHouseForm() {
    this.newHouse.push(
      this.createdHouse.id = this.newHouse.length+1,
      this.createdHouse.city,
      this.createdHouse.price,
      this.createdHouse.street,
      this.createdHouse.square,
      this.createdHouse.rooms,
      this.createdHouse.user = this.newUser[Math.floor(Math.random()*this.newUser.length)]
    );
    alert("Your house was created!");
    console.log(this.newHouse)
  }
}
