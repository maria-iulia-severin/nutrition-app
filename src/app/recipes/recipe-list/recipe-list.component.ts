import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'Description is here', 'https://www.seriouseats.com/thmb/IKmZuaIJ_ZEIurITc-UznICtgFg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20210712-tacos-al-pastor-melissa-hom-seriouseats-37-f72cdd02c9574bceb1eef1c8a23b76ed.jpg'),
    new Recipe('Second Recipe', 'Description is here', 'https://www.seriouseats.com/thmb/IKmZuaIJ_ZEIurITc-UznICtgFg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20210712-tacos-al-pastor-melissa-hom-seriouseats-37-f72cdd02c9574bceb1eef1c8a23b76ed.jpg')

  ]; //array with type Recipe - using the model Recipe
}
