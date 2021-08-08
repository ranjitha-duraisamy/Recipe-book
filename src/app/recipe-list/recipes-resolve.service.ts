import { DataService } from './../shared/data.service';
import { Recipe } from './recipe.model';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Injectable } from '@angular/core';
import { RecipeService } from './recipe.service';

@Injectable({
    providedIn: 'root'
})
export class RecipesResover implements Resolve<Recipe[]> {

    constructor( 
        private dataService: DataService,
        private recipeService: RecipeService ) {}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const recipes = this.recipeService.getRecipes();
        if(recipes.length === 0) {
            return this.dataService.fetchData();
        }
        else {
            return recipes;
        }
        
    }
}