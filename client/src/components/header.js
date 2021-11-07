import React, { useState, useEffect } from 'react'
import { Link, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { components as compo } from './index';
import { signout } from '../actions/userActions';


const { LoadingBox, MessageBox, SearchBox } = compo;

const Header = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const productCategoryList = useSelector((state) => state.productCategoryList);
  const { loading: loadingCategories, error: errorCategories, categories, } = productCategoryList;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();

  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <div>
      <header className="row">
        <div>
          <button
            type="button"
            className="open-sidebar"
            onClick={() => setSidebarIsOpen(true)}
          >
            <i className="fa fa-bars"></i>
          </button>
          <Link className="brand" to="/">amazona</Link>
        </div>
        <div>
          <Route
            render={({ history }) => (
              <SearchBox history={history}></SearchBox>
            )}
          />
        </div>
        <div>
          <Link to="/cart">
            Cart
            {cartItems.length > 0 && (
              <span className="badge">{cartItems.length}</span>
            )}
          </Link>
          {userInfo ? (
            <div className="dropdown">
              <Link to="#">{userInfo.name} <i className="fa fa-caret-down"></i>{' '}</Link>
              <ul className="dropdown-content">
                <li><Link to="/profile">User Profile</Link></li>
                <li><Link to="/orderhistory">Order History</Link></li>
                <li><Link to="#signout" onClick={signoutHandler}>Sign Out</Link></li>
              </ul>
            </div>
          ) : (
            <Link to="/signin">Sign In</Link>
          )}
          {userInfo && userInfo.isSeller && (
            <div className="dropdown">
              <Link to="#admin"> Seller <i className="fa fa-caret-down"></i></Link>
              <ul className="dropdown-content">
                <li><Link to="/productlist/seller">Products</Link></li>
                <li><Link to="/orderlist/seller">Orders</Link></li>
              </ul>
            </div>
          )}
          {userInfo && userInfo.isAdmin && (
            <div className="dropdown">
              <Link to="#admin">Admin <i className="fa fa-caret-down"></i></Link>
              <ul className="dropdown-content">
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/productlist">Products</Link></li>
                <li><Link to="/orderlist">Orders</Link></li>
                <li><Link to="/userlist">Users</Link></li>
                <li><Link to="/support">Support</Link></li>
              </ul>
            </div>
          )}
        </div>
      </header>
      <aside className={sidebarIsOpen ? 'open' : ''}>
        <ul className="categories">
          <li>
            <strong>Categories</strong>
            <button
              onClick={() => setSidebarIsOpen(false)}
              className="close-sidebar"
              type="button"
            >
              <i className="fa fa-close"></i>
            </button>
          </li>
          {loadingCategories ? (
            <LoadingBox></LoadingBox>
          ) : errorCategories ? (
            <MessageBox variant="danger">{errorCategories}</MessageBox>
          ) : (
            categories.map((c) => (
              <li key={c}>
                <Link
                  to={`/search/category/${c}`}
                  onClick={() => setSidebarIsOpen(false)}
                >
                  {c}
                </Link>
              </li>
            ))
          )}

          <li><Link to="/stepperComp">Stepper</Link></li>
          <Link to="/share">Share</Link><br />
          <Link to="/mainAuth">SocialAuth</Link><br />
          <Link to="/qrCodes">QrCodes</Link><br />
          <Link to="/recapcha">Recapcha</Link><br />
          <Link to="/mainCalculator">Calculator</Link><br />
          <Link to="/game">Boart Gamr</Link><br />
          <Link to="/expensTraker">ExpensTraker</Link><br />
          <Link to="/useReducerLogin">UseReducers</Link><br />
          <Link to="/useCallback">UseCallback</Link><br />
          <Link to="/Home">MernAuth</Link><br />
          <Link to="/dynamicGet">DynamicGet</Link><br />
          <Link to="/removeDuplicates">RemoveDuplicates</Link><br />
          <Link to="/removeDuplicates">RemoveDuplicates</Link><br />
          <Link to="/profilesModify">Profiles</Link><br />
          <Link to="/dSelect">dependent Selects</Link><br />
        </ul>
      </aside>
    </div>
  )
}

export default Header
