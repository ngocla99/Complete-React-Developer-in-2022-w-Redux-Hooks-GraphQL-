import { RootState } from './../store';
import { CategoriesState } from './category.reducer';
import { CategoryMap } from './category.type';
import { createSelector } from 'reselect';

const selectCategoryReducer = (state: RootState): CategoriesState =>
  state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): CategoryMap =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap)
);

export const selectCategoriesLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
