import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { Link, Outlet } from 'react-router-dom';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import CardDropdown from '../../components/card-dropdown/card-dropdown.component';
import CardIcon from '../../components/cart-icon/cart-icon.component';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { selectCurrentUser } from '../../store/user/user.selector';

import { selectIsCartOpen } from '../../store/cart/cart.selector';
import './navigation.styles.scss';
import { signOutStart } from '../../store/user/user.action';

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}
          <CardIcon />
        </div>
      </div>
      {isCartOpen && <CardDropdown />}
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
