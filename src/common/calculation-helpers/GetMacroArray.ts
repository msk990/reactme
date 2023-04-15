import { Ingredient } from "../../interfaces/Food";
import { MacroNutrients } from "../../interfaces/Nutrients";
import { CaloriesCalculator } from "./CaloriesCalculator";

export const getMacroArrayFromIngredients = (ings:Ingredient[]) : MacroNutrients[] => {
    let macros:MacroNutrients[] = []

    for (let i = 0; i < ings.length; i++) {
        let macro: MacroNutrients = {
        energyKj: ings[i].item.macroNutrients.energyKj*ings[i].quantity*10,
        energyKcal: ings[i].item.macroNutrients.energyKcal*ings[i].quantity*10,
        protein: ings[i].item.macroNutrients.protein*ings[i].quantity*10,
        carbs: ings[i].item.macroNutrients.carbs*ings[i].quantity*10,
        sugars: ings[i].item.macroNutrients.sugars*ings[i].quantity*10,
        dietaryFibre: ings[i].item.macroNutrients.dietaryFibre*ings[i].quantity*10,
        fat: ings[i].item.macroNutrients.fat*ings[i].quantity*10,
        saturated: ings[i].item.macroNutrients.saturated*ings[i].quantity*10,

        }
        macros.push(macro)
      }

      return macros

}

export const addMacroValues = (macros:MacroNutrients[])  => {

    let macroSum : MacroNutrients = {
        energyKj: 0,
        energyKcal: 0,
        protein: 0,
        carbs: 0,
        sugars: 0,
        dietaryFibre: 0,
        fat: 0,
        saturated: 0
    }

    for (let i = 0; i <  macros.length; i++) {
        macroSum.energyKj += macros[i].energyKj
        macroSum.energyKcal += macros[i].energyKcal
        macroSum.protein += macros[i].protein
        macroSum.carbs += macros[i].carbs
        macroSum.sugars += macros[i].sugars
        macroSum.dietaryFibre += macros[i].dietaryFibre
        macroSum.fat += macros[i].fat
        macroSum.saturated += macros[i].saturated
    }

    return macroSum



}

export const getMacroPerPortion = (macro:MacroNutrients) : MacroNutrients => {
    
    let portionMacro : MacroNutrients = {
        energyKj: macro.energyKj/100,
        energyKcal: macro.energyKcal/100,
        protein: macro.protein/100,
        carbs: macro.carbs/100,
        sugars: macro.sugars/100,
        dietaryFibre: macro.dietaryFibre/100,
        fat: macro.fat/100,
        saturated: macro.saturated/100
    }
    return portionMacro 
}

export const getCaloriesPerPortion = (macro:MacroNutrients) => {

    const calories = CaloriesCalculator(macro)

    return calories
}

export const foodCaloriesPerPortion = (ings:Ingredient[]) => {

    const macros = getMacroArrayFromIngredients(ings)
    const added = addMacroValues(macros)
    const macroPortion = getMacroPerPortion(added)
    const calPortion = getCaloriesPerPortion(macroPortion)

    return calPortion

}

export const foodMacrosPerPortion = (ings:Ingredient[]) => {
    const macros = getMacroArrayFromIngredients(ings)
    const added = addMacroValues(macros)
    const macroPortion = getMacroPerPortion(added)
    return macroPortion
}