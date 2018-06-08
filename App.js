import React, { Component } from "react";
import {} from "react-native";

import { createStackNavigator } from "react-navigation";

import Home from "./src/components/comp_home";
import Manage from "./src/components/comp_manage";
import Apps from "./src/components/imageTesting";

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    Manage: {
      screen: Manage
    },
    Apps: {
      screen: Apps
    }
  },
  {
    initialRouteName: "Apps",
    headerMode: "none"
  }
);
export default class App extends Component {
  render() {
    return <RootStack />;
  }
}
