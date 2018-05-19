"use strict";
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import { createStackNavigator } from "react-navigation";

import Login from "./src/components/comp_login";
import Register from "./src/components/comp_register";

import productsReducer from "./src/reducers/product-reducer";
import userReducer from "./src/reducers/user-reducer";

import { combineReducers, createStore } from "redux";

import { Provider } from "react-redux";

const RootStack = createStackNavigator(
  {
    Login: {
      screen: Login
    },
    Register: {
      screen: Register
    }
  },
  {
    initialRouteName: "Register"
  }
);

const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer
});

const store = createStore(allReducers, {
  products: [{ product: "iPhone" }],
  user: "Micheal"
});

console.log(window.__REDUX_DEVTOOLS_EXTENSION__);
console.log(store.getState());

const updateUserAction = {
  type: "update user",

  user: "jhon"
};
store.dispatch(updateUserAction);
console.log(store.getState());

const App = () => {
  return (
    <Provider store={store}>
      {/* <RootStack aRandrom="Whatever" /> */}
      <Register aRandom="Whatever" />
    </Provider>
  );
};

export default App;
// connect(mapStateToApp)
