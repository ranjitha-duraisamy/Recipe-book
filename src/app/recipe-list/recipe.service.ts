import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes = [
    new Recipe('Fry Chicken', 'Korean Fry chicken', 'https://www.kitchensanctuary.com/wp-content/uploads/2019/08/Korean-Fried-Chicken-foodporn-7373.jpg',
    [
      new Ingredient('Chicken', 1),
      new Ingredient('Tomato sauce', 1)
    ]),
    new Recipe('Chicken Biriyani', 'Hydrabad Chicken Biriyani', 'http://www.bakespace.com/images/large/f468b5f5247496b4f854e203bd46a7cd.jpeg',
    [
      new Ingredient('Rice', 1),
      new Ingredient('Biriyani Masala', 2)
    ])
  ];

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingService: ShoppingService) { }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipeById(id: number): Recipe {
    return this.recipes.slice()[id];
  }

  addIngredientList(ingredients: Ingredient[]): void {
    this.shoppingService.addIngredientList(ingredients);
  }
}
