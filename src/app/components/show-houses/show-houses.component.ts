import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-houses',
  templateUrl: './show-houses.component.html',
  styleUrls: ['./show-houses.component.css']
})
export class ShowHousesComponent {
  constructor() { }

  @Input() house;
  @Input() courseUSD;

  showFullIndex: number;
  showMore: boolean = false;

  showFullInfo(id: number) {
    this.showFullIndex = id;
    this.showMore = !this.showMore;
  }
}
