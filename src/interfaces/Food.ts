import { Item } from "./NewIngredientDto";
import { MacroNutrients, MicroNutrients } from "./Nutrients";
import { Tag } from "./Tag";

export interface Ingredient{
    id?: string;
    quantity: number;
    item: Item;
}

export interface Food {
    id?: string,
    foodName: string,
    foodNameSl: string,
    gen: boolean,
    processing: string,
    portion: number,
    macroNutrients:MacroNutrients,
    microNutrients: MicroNutrients,
    ingredients: Ingredient[],
    tag?:Tag[]

}
export interface IngredientDTO {
    quantity: number, itemId:string
}
export interface FoodDTO {
    id?: string,
    foodName: string,
    foodNameSl: string,
    gen: boolean,
    processing: string,
    portion: number,
    macroNutrients?:MacroNutrients,
    microNutrients?: MicroNutrients,
    ingredients: IngredientDTO[],
    tag?:Tag[]

}

export interface FoodInMenu {
    id: string,
    foodName: string,
    foodNamesl: string
}

export interface FoodInMeal {
    id: string,
}