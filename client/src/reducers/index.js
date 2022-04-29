import { combineReducers } from 'redux';
import { cartReducer } from './cartReducers';
import {
  orderCreateReducer, orderDeleteReducer, orderDeliverReducer, orderDetailsReducer,
  orderListReducer, orderMineListReducer, orderPayReducer, orderSummaryReducer,
} from './orderReducers';
import {
  productCategoryListReducer, productCreateReducer, productDeleteReducer,
  productDetailsReducer, productListReducer, productReviewCreateReducer,
  productUpdateReducer,
} from './productReducers';
import {
  userAddressMapReducer, userDeleteReducer, userDetailsReducer, userListReducer,
  userRegisterReducer, userSigninReducer, userTopSellerListReducer, userUpdateProfileReducer,
  userUpdateReducer,
} from './userReducers';

import albumReducer from "./albumReducer";

import authReducer from './auth';
import dashboardReducer from './dashboard';
import stepper from "./stepper";


export default combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderMineList: orderMineListReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userUpdate: userUpdateReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  productDelete: productDeleteReducer,
  orderList: orderListReducer,
  orderDelete: orderDeleteReducer,
  orderDeliver: orderDeliverReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userTopSellersList: userTopSellerListReducer,
  productCategoryList: productCategoryListReducer,
  productReviewCreate: productReviewCreateReducer,
  userAddressMap: userAddressMapReducer,
  orderSummary: orderSummaryReducer,

  // form: formReducer,           reducer
  auth: authReducer,
  dash: dashboardReducer,

  album: albumReducer,
  stepper: stepper
});