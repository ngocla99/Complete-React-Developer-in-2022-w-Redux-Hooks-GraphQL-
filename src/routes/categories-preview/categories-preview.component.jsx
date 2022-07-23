import { Fragment } from 'react';
import CategoryPreview from '../../components/category-preview/category-preview.component';

import { useSelector } from 'react-redux/es/exports';
import {
  selectCategoriesLoading,
  selectCategoriesMap,
} from '../../store/category/category.selector';
import Spinner from '../../components/spinner/spinner.component';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesLoading);
  return (
    <Fragment>
      {isLoading && <Spinner />}
      {!isLoading &&
        Object.keys(categoriesMap).map((title, idx) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={idx} title={title} products={products} />
          );
        })}
    </Fragment>
  );
};

export default CategoriesPreview;
