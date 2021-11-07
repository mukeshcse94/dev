import React, { Suspense, lazy } from 'react';

const CartScreen = lazy(() => import('./CartScreen'));
const DashboardScreen = lazy(() => import('./DashboardScreen'));
const HomeScreen = lazy(() => import('./HomeScreen'));
const MapScreen = lazy(() => import('./MapScreen'));
const OrderHistoryScreen = lazy(() => import('./OrderHistoryScreen'));
const OrderListScreen = lazy(() => import('./OrderListScreen'));
const OrderScreen = lazy(() => import('./OrderScreen'));
const PaymentMethodScreen = lazy(() => import('./PaymentMethodScreen'));
const PlaceOrderScreen = lazy(() => import('./PlaceOrderScreen'));
const ProductEditScreen = lazy(() => import('./ProductEditScreen'));
const ProductListScreen = lazy(() => import('./ProductListScreen'));
const ShippingAddressScreen = lazy(() => import('./ShippingAddressScreen'));
const ProductScreen = lazy(() => import('./ProductScreen'));
const ProfileScreen = lazy(() => import('./ProfileScreen'));
const RegisterScreen = lazy(() => import('./RegisterScreen'));
const SearchScreen = lazy(() => import('./SearchScreen'));
const SellerScreen = lazy(() => import('./SellerScreen'));
const SigninScreen = lazy(() => import('./SigninScreen'));
const SupportScreen = lazy(() => import('./SupportScreen'));
const UserEditScreen = lazy(() => import('./UserEditScreen'));
const UserListScreen = lazy(() => import('./UserListScreen'));


const components = {
  DashboardScreen, HomeScreen, MapScreen, OrderHistoryScreen, OrderListScreen, OrderScreen,
  CartScreen, PaymentMethodScreen, PlaceOrderScreen, ProductEditScreen, ProductListScreen,
  ProductScreen, ProfileScreen, RegisterScreen, SearchScreen, SellerScreen, ShippingAddressScreen,
  SigninScreen, SupportScreen, UserEditScreen, UserListScreen
};

export { components };