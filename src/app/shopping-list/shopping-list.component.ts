import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [];

  constructor() { }

  ngOnInit(): void {
    this.ingredients = [
      new Ingredient('Chicken', 1),
      new Ingredient('Chicken Masala', 2)
    ];
  }

}
