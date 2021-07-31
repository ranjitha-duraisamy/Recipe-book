import { Recipe } from './../recipe.model';
import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Ingredient } from 'src/app/shared/Ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) =>{
      this.selectedRecipe = recipe;
    })
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.recipeService.addIngredientList(ingredients);
  }

}
