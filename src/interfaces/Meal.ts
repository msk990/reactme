import { Food } from "./Food";

export interface Meal {
    id?: string;
    start: Date;
    foods?: Food[]

}

export interface MealDto {
    id?: string;
    start: Date;
    end: Date;
    foods?: Food[];
    color: string;

}