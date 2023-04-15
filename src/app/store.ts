import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import searchReducer from '../common/searchSlice';
import mealChartReducer from '../features/menu/MealChartSlice';
import { springApi } from '../api/emptySpringApi';
import ingredientSearchReducer from '../features/ingredients/ingredientSearchSlice';
import languageReducer from '../common/languageSlice';
import nutrientsReducer from '../common/nutrientsSlice';
import caloriesReducer from '../common/caloriesSlice';
import foodSearchReducer from '../features/food/foodSearchSlice';
import ingredientsReducer from '../common/ingredientsSlice';
import itemReducer from '../common/itemSlice';

import foodsReducer from '../common/foodsSlice';
import eventShortReducer from '../features/menu/eventShortSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    searchTerm: searchReducer,
    mealData:mealChartReducer,
    ingredientSearch: ingredientSearchReducer,
    foodSearch: foodSearchReducer,
    lang: languageReducer,
    savedCalories: caloriesReducer,
    nutrients: nutrientsReducer,
    ingreds: ingredientsReducer,
    itm: itemReducer,
   eventShort: eventShortReducer,
    foodLst: foodsReducer,
   

    [springApi.reducerPath]: springApi.reducer,
  },
  
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(springApi.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
