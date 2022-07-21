import { Fragment } from 'react';
import CategoryPreview from '../../components/category-preview/category-preview.component';

import { useSelector } from 'react-redux/es/exports';
import { selectCategoriesMap } from '../../store/category/category.selector';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title, idx) => {
        const products = categoriesMap[title];
        return <CategoryPreview key={idx} title={title} products={products} />;
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
