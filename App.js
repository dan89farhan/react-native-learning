"use strict";
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import { StackNavigator } from "react-navigation";

import Login from "./src/components/comp_login";

const RootStack = StackNavigator(
  {
    Login: {
      screen: Login
    }
  },
  {
    initialRouteName: "Login"
  }
);
export default class App extends Component {
  render() {
    return <RootStack />;
  }
}
