import { Recipe } from './../recipe.model';
import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Ingredient } from 'src/app/shared/Ingredient.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;
  recipeId: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.selectedRecipe = this.recipeService.getRecipeById(+params['id']);
      this.recipeId = +params['id'];
    })
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.recipeService.addIngredientList(ingredients);
  }

  onDeleteRecipe(): void {
    this.recipeService.removeRecipe(this.recipeId);
    this.router.navigate(['../']);
  }

}
