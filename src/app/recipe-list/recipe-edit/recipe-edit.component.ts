import { Ingredient } from './../../shared/Ingredient.model';
import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  editMode: boolean = false;
  recipe: Recipe;
  recipeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService) { }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.editMode = !!params['id'];
      if(this.editMode) {
        this.recipe = this.recipeService.getRecipeById(+params['id']);
      }
      this.initForm();
    })
  }

  get ingredientControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  initForm(): void {
    let recipeName = '';
    let imageUrl = '';
    let description = '';
    let recipeIngredients = [];
    if(this.editMode) {
      recipeName = this.recipe.name;
      imageUrl = this.recipe.imagePath;
      description = this.recipe.description;
      if(this.recipe) {
        this.recipe.ingredients.forEach((el: Ingredient) => {
          recipeIngredients.push(new FormGroup({
            name: new FormControl(el.name),
            amount: new FormControl(el.amount)
          }))
        })
      }
    }
    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, [ Validators.required ]),
      image: new FormControl(imageUrl, [ Validators.required ]),
      description: new FormControl(description, [ Validators.required ]),
      ingredients: new FormArray(recipeIngredients)
    })
  }

}
