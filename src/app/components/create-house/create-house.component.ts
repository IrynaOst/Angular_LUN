import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-create-house',
  templateUrl: './create-house.component.html',
  styleUrls: ['./create-house.component.css']
})
export class CreateHouseComponent {

  constructor() { }

  @Input() houses;
  @Input() users;

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
    this.houses.push(
      this.createdHouse.id = this.houses.length+1,
      this.createdHouse.city,
      this.createdHouse.price,
      this.createdHouse.street,
      this.createdHouse.square,
      this.createdHouse.rooms,
      this.createdHouse.user = this.users[Math.floor(Math.random()*this.users.length)]
    );
    alert("Your house was created!");
  }
}
