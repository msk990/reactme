import { MacroNutrients, MicroNutrients } from "./Nutrients"
import { Tag } from "./Tag"

export interface Nutrients {
    energy: number,   
    proteinG: number,
    proteinC: number, 
    carbG: number,
    carbC: number, 
    sugarG: number,
    sugarC: number, 
    fatG: number,
    fatC: number,
    saturatedG: number,
    saturatedC: number,
    micro: String[]
}

export interface NewItemDto {
    itemName: string,
    category: string,
    prep: string,
    nutrients: Nutrients
    
}

export interface Item {
    id: string,
    itemName: string,
    itemNameSl: string,
    processing: string,
    macroNutrients: MacroNutrients,
    microNutrients: MicroNutrients,
    tag?: Tag[]
}