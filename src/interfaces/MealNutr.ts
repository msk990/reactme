export interface mealNutr {
    weight: number;
    calories: number;
    nutrients:{
        proteins:{
            weight: number;
            calories: number;
        },
        carbs:{
            weight: number;
            calories: number;
        },
        sugars:{
            weight: number;
            calories: number;
        },
        fat:{
            weight: number;
            calories: number;
        },
        saturated:{
            weight: number;
            calories: number;
        }
    }
}