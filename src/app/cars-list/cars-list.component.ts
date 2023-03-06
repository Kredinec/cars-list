import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  cars: any[] = [
    {id: 1, model: 'BMW', color: 'black', price: 25000, sale: 'for sale'},
    {id: 2, model: 'Mazda', color: 'green', price: 14300, sale: 'for sale'},
    {id: 3, model: 'Kia', color: 'black', price: 16500, sale: 'sold'},
    {id: 4, model: 'Ford', color: 'red', price: 14000, sale: 'for sale'},
    {id: 5, model: 'Renault', color: 'blue', price: 15250, sale: 'for sale'},
    {id: 6, model: 'Jeep', color: 'purple', price: 23000, sale: 'sold'},
  ]
  saleOptions: string[] = ['for sale', 'sold', 'all'];
  car: any;
  filteredCars = [];
  selectedSale: string = 'all';
  minPrice: number;
  maxPrice: number;

  ngOnInit() {
    this.filteredCars = this.cars;
  }

  filterChanged() {

    this.filteredCars = this.cars.filter((car) => {
      let carCheck = false;
      let minCheckPrice = false;
      let maxCheckPrice = false
      if (car.sale === this.selectedSale || this.selectedSale === 'all') {
        carCheck = true;
      }
      if (this.minPrice < car.price || !this.minPrice) {
        minCheckPrice = true;
      }
      if (this.maxPrice > car.price || !this.maxPrice) {
        maxCheckPrice = true;
      }
      return carCheck && minCheckPrice && maxCheckPrice;
    })
    console.log(this.filteredCars);
  }

  deleteCar(id) {

    for (let i = 0; i < this.cars.length; i++) {
      if (this.cars[i].id == id) {
        this.cars.splice(i, 1);
      }

    }
  }
}
