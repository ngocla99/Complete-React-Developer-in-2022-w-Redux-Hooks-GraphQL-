import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CardContext } from '../../context/card.context';

import './cart-icon.styles.scss';

const CardIcon = () => {
  const { setIsCartOpen } = useContext(CardContext);
  const toggleIsCartOpen = () => setIsCartOpen((cartIsOpen) => !cartIsOpen);

  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
};

export default CardIcon;
