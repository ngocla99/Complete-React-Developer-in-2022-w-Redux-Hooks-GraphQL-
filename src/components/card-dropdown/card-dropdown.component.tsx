import { useSelector } from 'react-redux/es/exports';
import { useNavigate } from 'react-router-dom';
import { selectCartItems } from '../../store/cart/cart.selector';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';

const CardDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <span>Your cart is empty</span>
        )}
      </div>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CardDropdown;
