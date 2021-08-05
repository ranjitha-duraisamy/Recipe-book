import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Ingredient } from '../shared/Ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private ingredients: Ingredient[] = [
    new Ingredient('Chicken', 1),
    new Ingredient('Chicken Masala', 2)
  ];
  ingredientChanged = new Subject<Ingredient[]>();
  editIngredient = new Subject<number>();

  constructor() { }

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  addIngredientList(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  updateIngredient(id: number, ingredient: Ingredient) {
    this.ingredients[id] = ingredient;
    this.ingredientChanged.next(this.ingredients.slice());
  }

  deleteIngredient(id: number) {
    this.ingredients.splice(id,1);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  editableIngredient(id: number) {
    return this.editIngredient.next(id);
  }
}
