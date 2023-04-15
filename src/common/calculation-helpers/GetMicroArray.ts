import { Ingredient } from "../../interfaces/Food"
import { MicroNutrients } from "../../interfaces/Nutrients"

export const getMicroArrayFromIngredients = (ings:Ingredient[]) : MicroNutrients[] => {
    let micros:MicroNutrients[] = []

    for (let i = 0; i < ings.length; i++) {
        let micro: MicroNutrients = {
        ca: ings[i].item.microNutrients.ca*ings[i].quantity*10,
        fe: ings[i].item.microNutrients.fe*ings[i].quantity*10,
        mg: ings[i].item.microNutrients.mg*ings[i].quantity*10,
        k: ings[i].item.microNutrients.k*ings[i].quantity*10,
        na: ings[i].item.microNutrients.na*ings[i].quantity*10,
        zn: ings[i].item.microNutrients.zn*ings[i].quantity*10,
        carotenoide: ings[i].item.microNutrients.carotenoide*ings[i].quantity*10,
        retinol: ings[i].item.microNutrients.retinol*ings[i].quantity*10,
        thiamin: ings[i].item.microNutrients.thiamin*ings[i].quantity*10,
        riboflavin: ings[i].item.microNutrients.riboflavin*ings[i].quantity*10,
        niacin: ings[i].item.microNutrients.niacin*ings[i].quantity*10,
        b6: ings[i].item.microNutrients.b6*ings[i].quantity*10,
        b12: ings[i].item.microNutrients.b12*ings[i].quantity*10,
        folate: ings[i].item.microNutrients.folate*ings[i].quantity*10,
        vitaminC: ings[i].item.microNutrients.vitaminC*ings[i].quantity*10,
        vitaminD: ings[i].item.microNutrients.vitaminD*ings[i].quantity*10,
        vitaminE: ings[i].item.microNutrients.vitaminE*ings[i].quantity*10,
        

        }
        micros.push(micro)
      }
    
      return micros

}

export const addMicroValues = (macros:MicroNutrients[])  => {

    let microSum : MicroNutrients = {
        ca: 0,
        fe: 0,
        mg: 0,
        k: 0,
        na: 0,
        zn: 0,
        carotenoide: 0,
        retinol:0,
        thiamin: 0,
        riboflavin: 0,
        niacin: 0,
        b6: 0,
        b12: 0,
        folate: 0,
        vitaminC: 0,
        vitaminD: 0,
        vitaminE: 0,
    }

    for (let i = 0; i <  macros.length; i++) {
        microSum.ca += macros[i].ca
        microSum.fe += macros[i].fe
        microSum.mg += macros[i].mg
        microSum.k += macros[i].k
        microSum.na += macros[i].na
        microSum.zn += macros[i].zn
        microSum.carotenoide += macros[i].carotenoide
        microSum.retinol += macros[i].retinol
        microSum.thiamin += macros[i].thiamin
        microSum.riboflavin += macros[i].riboflavin
        microSum.niacin += macros[i].niacin
        microSum.b6 += macros[i].b6
        microSum.b12 += macros[i].b12
        microSum.folate += macros[i].folate
        microSum.vitaminC += macros[i].vitaminC
        microSum.vitaminD += macros[i].vitaminD
        microSum.vitaminE += macros[i].vitaminE
        
       
    }


    return microSum



}

export const getMicroPerPortion = (micro:MicroNutrients) : MicroNutrients => {
    
    let portionMicro : MicroNutrients = {
        ca: micro.ca/100,
        fe: micro.fe/100,
        mg: micro.mg/100,
        k: micro.k/100,
        na: micro.na/100,
        zn: micro.zn/100,
        carotenoide: micro.carotenoide/100,
        retinol:micro.retinol/100,
        thiamin: micro.thiamin/100,
        riboflavin: micro.riboflavin/100,
        niacin: micro.niacin/100,
        b6: micro.b6/100,
        b12: micro.b12/100,
        folate: micro.folate/100,
        vitaminC: micro.vitaminC/100,
        vitaminD: micro.vitaminD/100,
        vitaminE: micro.vitaminE/100,
    }

    return portionMicro 
}

export const foodMicrosPerPortion = (ings:Ingredient[]) => {

    const macros = getMicroArrayFromIngredients(ings)
    const added = addMicroValues(macros)
    const microPortion = getMicroPerPortion(added)
   

 
    return microPortion

}

