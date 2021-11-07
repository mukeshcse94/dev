import React, { useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import { listProductCategories } from './actions/productActions';
import { components as compo } from './components/index';
import { components as screens } from './screens/index';
import Header from "./components/header";
import Footer from "./components/footer";
import StepperCompo from "./steper/stepperComp";
import Share from "./share/share";
import MainAuth from "./socialAuthentications/mainAuth";
import QrCodes from "./qrCodeGenerators/qrCodes";
import Recapcha from "./recapcha/recapcha";
import MainCalculator from "./calculator/mainCalculator";
import Game from "./bordGame/game";
import ExpenseTraker from "./expenseTraker/expensTraker";
import LoginUse from "./useReducers/useReducerLogin";
import UseCall from "./useCallback/useCallback";
import DynamicGet from "./cascadingDD/dynamicGet"
import RemoveDuplicates from "./removeDuplicates/removeDuplicates"

import Auth from './socialAuthentications/mern/auth';
import Home from './socialAuthentications/mern/Home';
import SignUp from './socialAuthentications/mern/SignUp';
import SignIn from './socialAuthentications/mern/SignIn';
import Dashboard from './socialAuthentications/mern/Dashboard';
import authGuard from './socialAuthentications/mern/HOCs/authGuard';
import Profiles from "./galleries/profilesModify";
import DSelects from "./dependentSelects/dSelect";

const { PrivateRoute, AdminRoute, SellerRoute } = compo;

const { DashboardScreen, HomeScreen, MapScreen, OrderHistoryScreen, OrderListScreen, OrderScreen,
  CartScreen, PaymentMethodScreen, PlaceOrderScreen, ProductEditScreen, ProductListScreen,
  ProductScreen, ProfileScreen, RegisterScreen, SearchScreen, SellerScreen, ShippingAddressScreen,
  SigninScreen, SupportScreen, UserEditScreen, UserListScreen } = screens;


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProductCategories());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading Page...</div>}>
        <div className="grid-container">
          <Header />

          <main>
            <Route path="/seller/:id" component={SellerScreen} />

            {/* ? because user can go in card without adding new product id */}
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/product/:id" component={ProductScreen} exact />
            <Route path="/product/:id/edit" component={ProductEditScreen} exact />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/shipping" component={ShippingAddressScreen} />
            <Route path="/payment" component={PaymentMethodScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/orderhistory" component={OrderHistoryScreen} />
            <Route path="/search/name/:name?" component={SearchScreen} exact />
            <Route path="/search/category/:category" component={SearchScreen} exact />
            <Route path="/search/category/:category/name/:name" component={SearchScreen} exact />
            <Route
              path="/search/category/:category/name/:name/min/:min/max/:max/rating/:rating/order/:order/pageNumber/:pageNumber"
              component={SearchScreen}
              exact
            />
            <PrivateRoute path="/profile" component={ProfileScreen} />
            <PrivateRoute path="/map" component={MapScreen} />
            <AdminRoute path="/productlist" component={ProductListScreen} exact />
            <AdminRoute path="/productlist/pageNumber/:pageNumber" component={ProductListScreen} exact />
            <AdminRoute path="/orderlist" component={OrderListScreen} exact />
            <AdminRoute path="/userlist" component={UserListScreen}></AdminRoute>
            <AdminRoute path="/user/:id/edit" component={UserEditScreen} />

            <AdminRoute path="/dashboard" component={DashboardScreen} />
            <AdminRoute path="/support" component={SupportScreen}></AdminRoute>

            <SellerRoute path="/productlist/seller" component={ProductListScreen} />
            <SellerRoute path="/orderlist/seller" component={OrderListScreen} />
            <Route path="/" component={HomeScreen} exact />

            {/* Added */}
            <Route path="/stepperComp" component={StepperCompo} exact />
            <Route path="/share" component={Share} exact />
            <Route path="/mainAuth" component={MainAuth} exact />
            <Route path="/qrCodes" component={QrCodes} exact />
            <Route path="/recapcha" component={Recapcha} exact />
            <Route path="/mainCalculator" component={MainCalculator} exact />
            <Route path="/game" component={Game} exact />
            <Route path="/expensTraker" component={ExpenseTraker} exact />
            <Route path="/useReducerLogin" component={LoginUse} exact />
            <Route path="/useCallback" component={UseCall} exact />
            <Route path="/dynamicGet" component={DynamicGet} exact />
            <Route path="/removeDuplicates" component={RemoveDuplicates} exact />
            <Route path="/profilesModify" component={Profiles} exact />
            <Route path="/dSelect" component={DSelects} exact />

            <Auth>
              <Route exact path="/" component={Home} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/dashboard" component={authGuard(Dashboard)} />
            </Auth>
          </main>
          <Footer />
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
