import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  editMode: boolean = false;
  recipe: Recipe;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService) { }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.editMode = !!params['id'];
      if(this.editMode) {
        this.recipe = this.recipeService.getRecipeById(+params['id']);
      }
    })
  }

}
