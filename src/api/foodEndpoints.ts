import { Food, FoodDTO } from "../interfaces/Food";
import { springApi } from "./emptySpringApi";

export const foodApi = springApi.injectEndpoints({
    endpoints:(builder) => ({
        getFoodList: builder.query<any,{page:number, term:string, tag:string}>({ 
            query: (arg) => {
                const { page, term, tag } = arg;
                const size = 6
                console.log('arg: ', arg);
                return {
                  url: 'foods/poochie',
                  params: { page, term, tag, size },
                };
              },
              providesTags:['foods']

        }), 
        getFood: builder.query<any,string>({ 
          query: (id) => `foods/${id}`
      }),
        addFood: builder.mutation<String, FoodDTO>({
            query: (newFood) => ({
                url:`foods`,
                method: 'POST',
                body: newFood
            }),
            invalidatesTags:['foods']

        })


        })
    })
    export const { 
        useGetFoodListQuery,
        useAddFoodMutation,
        useGetFoodQuery
      //  useUpdateItemMutation
    
    } = foodApi