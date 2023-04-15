
import { NewItemDto } from '../interfaces/NewIngredientDto';
import { Tag } from '../interfaces/Tag';
import { springApi } from './emptySpringApi';
export const itemApi = springApi.injectEndpoints({
    endpoints: (builder) => ({
        getItems: builder.query<any,{page:number, term:string, tag:string}>({ 
            
            // query: (arg) => ({
                
            //     url: `/items/juje?term=${arg.term}&size=6&page=${arg.page}`
            
            // }),
            query: (arg) => {
                const { page, term, tag } = arg;
                const size = 6
                console.log('arg: ', arg);
                return {
                  url: 'items/poochie',
                  params: { page, term, tag, size },
                };
              },
              providesTags:['items']

            }),
   
        addItem: builder.mutation<String, NewItemDto>({ 
            query: (newItem) => ({
                url: `items`,
                method: 'POST',
                body: newItem,
              }),
              invalidatesTags:['items']
        }),
        updateItem: builder.mutation({
            query: (item) => ({
              url:`items/${item.id}`,
              method: 'PUT',
              body: item
            }),
            invalidatesTags:['items']
          }),
          
        }),
    
})

export const { 
    useGetItemsQuery,
    useAddItemMutation,
    useUpdateItemMutation

} = itemApi