import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import { CategoryItem } from '../../store/category/category.type';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import './product-card.styles.scss';

type ProductCardProps = {
  product: CategoryItem;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const addItemToCartHandler = () =>
    dispatch(addItemToCart(cartItems, product));

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={name} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addItemToCartHandler}
      >
        ADD TO CARD
      </Button>
    </div>
  );
};

export default ProductCard;
