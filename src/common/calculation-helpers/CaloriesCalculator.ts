import { Calories } from "../../interfaces/Calories";
import { MacroNutrients } from "../../interfaces/Nutrients";

export const CaloriesCalculator = (macro:MacroNutrients):Calories => {
    const { energyKcal: energy, protein: proteinG, carbs: carbsG, sugars: sugarsG, dietaryFibre: fiberG, fat: fatG, saturated: saturatedG } = macro

    const pureCarbsG = carbsG - sugarsG 
    const pureFatG = fatG - saturatedG

    const calObject = {
        total: energy,
        proteins: proteinG*4,
        pureCarbs: pureCarbsG*4,
        sugars: sugarsG*4,
        fiber: fiberG*2,
        pureFat: pureFatG*9,
        saturated: saturatedG*9

    }

    return calObject
}