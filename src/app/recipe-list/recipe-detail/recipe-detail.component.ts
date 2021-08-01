import { Recipe } from './../recipe.model';
import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Ingredient } from 'src/app/shared/Ingredient.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    // this.recipeService.recipeSelected.subscribe((recipe: Recipe) =>{
    //   this.selectedRecipe = recipe;
    // })
    this.route.params.subscribe(params => {
      this.selectedRecipe = this.recipeService.getRecipeById(+params['id']);
    })
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.recipeService.addIngredientList(ingredients);
  }

}
