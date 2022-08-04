import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {

  filters = {
    "meal_type" : "lunch",
    "cuisine" : "indian",
    "distance" : 5,
    "popular" : true,
    "priceByOrder" : 'highToLow',
    "price": {
      "lowerPrice" : "5",
      "higherPrice" : "10",
    }



  }
  constructor() { }

  ngOnInit() {
  }
  mealTypeChange(ev){
    console.log(ev.detail.value);
    const type = ev.detail.value;
    this.filters.meal_type= type;
  } //Menja tip obroka i ispisuje 

  cuisineTypeChange(ev){
    console.log(ev.detail.value);
    const type = ev.detail.value;
    this.filters.cuisine= type;
  } //menja vrstu hrane
  distanceChange(ev){
    console.log(ev.detail.value);
    const type = ev.detail.value;
    this.filters.distance= type;
  } //distancu menja
  popularChange(ev){
    console.log(ev.detail.value);
    const type = ev.detail.value;
    this.filters.popular= type;
  } //menjanje popularnosti
  highLowChange(ev){
    console.log(ev.detail.value);
    const type = ev.detail.value;
    this.filters.priceByOrder= type;
  } //LTH i HTL
  priceChange(ev){
    console.log(ev.detail.value);
    const type = ev.detail.value;
    this.filters.price.lowerPrice= type.lower;
    this.filters.price.higherPrice= type.upper;
    console.log(this.filters.price)
  } //odeljak za price

  reset(){
    this.filters = {
      "meal_type" : "lunch",
    "cuisine" : "indian",
    "distance" : 5,
    "popular" : true,
    "priceByOrder" : 'highToLow',
    "price": {
      "lowerPrice" : "5",
      "higherPrice" : "10",
    }
  }
  }
  applyFilters(){
    console.log(this.filters);
    
  } 



}
