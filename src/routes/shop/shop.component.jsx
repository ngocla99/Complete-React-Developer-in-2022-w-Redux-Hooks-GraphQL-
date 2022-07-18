import { useContext } from 'react';
import { ProductContext } from '../../context/product.context';
import ProductCard from '../../components/product-card/product-card.component';

import './shop.styles.scss';

const Shop = () => {
  const { products } = useContext(ProductContext);
  console.log(products);
  return (
    <div className='products-container'>
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Shop;
