import { Meal } from "../interfaces/Meal";
import { springApi } from "./emptySpringApi";

export const mealApi = springApi.injectEndpoints({
    endpoints:(builder) => ({
        getAllMeals: builder.query<any, void>({
            query: () => ({
               
                    url: 'meals'
               
            }),
            providesTags:['meals']
        }),
        getMeal: builder.query<Meal,string>({ 
            query: (id) => `meals/${id}`
        }),
        addMeal: builder.mutation<String, Meal>({
            query: (newMeal) => ({
                url: 'meals',
                method: 'POST',
                body: newMeal
            }),
            invalidatesTags:['meals'] 
        })
    }),
   
})

export const {
    useGetAllMealsQuery,
    useAddMealMutation
} = mealApi