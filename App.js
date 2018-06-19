import React, { Component } from "react";

import { createStackNavigator } from "react-navigation";

import Home from "./src/components/comp_home";
import Manage from "./src/components/comp_manage";
import Result from './src/components/comp_result';


const RootStack = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    Manage: {
      screen: Manage
    },
    Result: {
      screen: Result
    }
  },
  {
    initialRouteName: "Manage",
    headerMode: "none"
  }
);
export default class App extends Component {
  render() {
    return <RootStack />;
  }
}
