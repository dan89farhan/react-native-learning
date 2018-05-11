"use strict";

import React, { Component } from "react-native";

import { Comp_Login } from "../components/comp_login";

class Login extends Component {
  auto_focus = false;
  placeholder = "Enter User id";
  Keyboardtype = "numeric";

  render() {
    return (
      <View>
        <Login />
      </View>
    );
  }
}
