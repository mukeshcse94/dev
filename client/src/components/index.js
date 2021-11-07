import React, { Suspense, lazy } from 'react';

const AdminRoute = lazy(() => import('./AdminRoute'));
const ChatBox = lazy(() => import('./ChatBox'));
const CheckoutSteps = lazy(() => import('./CheckoutSteps'));
const LoadingBox = lazy(() => import('./LoadingBox'));
const MessageBox = lazy(() => import('./MessageBox'));
const PrivateRoute = lazy(() => import('./PrivateRoute'));
const Product = lazy(() => import('./Product'));
const Rating = lazy(() => import('./Rating'));
const SearchBox = lazy(() => import('./SearchBox'));
const SellerRoute = lazy(() => import('./SellerRoute'));


const components = {
  ChatBox, CheckoutSteps, LoadingBox, MessageBox, PrivateRoute, Product, AdminRoute,
  Rating, SearchBox, SellerRoute
};

export { components };