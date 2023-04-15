export interface MacroNutrients {
    id?: string;
    energyKj: number;
    energyKcal: number;
    protein: number;
    carbs: number;
    sugars: number;
    dietaryFibre: number;
    fat: number;
    saturated: number;

}


export interface MicroNutrients {
    id?: string;
    ca: number;
    fe: number;
    mg: number;
    k: number;
    na: number;
    zn: number;
    carotenoide: number;
    retinol:number
    thiamin: number;
    riboflavin: number;
    niacin: number;
    b6: number;
    b12: number;
    folate: number;
    vitaminC: number;
    vitaminD: number;
    vitaminE: number;

}

export interface AllNutrients{
    weight: number
    macroNutrients: MacroNutrients
    microNutrients: MicroNutrients
}