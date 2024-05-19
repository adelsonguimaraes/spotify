import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spotify';

  car: CarModel = {
    brand: 'Ford',
    model: 'Focus',
    year: 2021
  }
}

interface CarModel {
  brand: string;
  model: string;
  year: number;
}
