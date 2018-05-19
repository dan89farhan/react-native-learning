"use strict";

import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  AsyncStorage,
  ToastAndroid
} from "react-native";

// import PropTypes from "prop-types";

// import Cont_Login from "../containers/cont_login";

import Sty_Login from "../styles/sty_login";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uuid: 0,
      password: ""
    };
  }

  async save_to_db() {
    try {
      await AsyncStorage.setItem("uuid", this.state.uuid);
      await AsyncStorage.setItem("password", this.state.password);
      ToastAndroid.show("Data inserted successfully ", ToastAndroid.SHORT);

      console.log("");
    } catch (error) {
      ToastAndroid.show("Error " + error, ToastAndroid.SHORT);
      console.log("Error", error);
    }
  }

  async retrive_from_db() {
    try {
      const uuid = await AsyncStorage.getItem("uuid");
      const password = await AsyncStorage.getItem("password");
      if (uuid !== null && password !== null) {
        // We have data!!
        ToastAndroid.show(
          "Data is " + uuid + " password is " + password,
          ToastAndroid.SHORT
        );
        console.log(value);
      }
    } catch (error) {
      ToastAndroid.show("Error " + error, ToastAndroid.SHORT);
      console.log("Error", error);
    }
  }

  render() {
    return (
      <View>
        <Text style={Sty_Login.container}>Hello</Text>
        <TextInput
          autoFocus={true}
          placeholder={"Enter your UUID"}
          keyboardType={"numeric"}
          onChangeText={uuid => this.setState({ uuid })}
          style={Sty_Login.text_input}
        />
        <TextInput
          // autoFocus={this.props.autoFocus}
          placeholder={"Enter your Password"}
          keyboardType={"numeric"}
          onChangeText={password => this.setState({ password })}
          style={Sty_Login.text_input}
        />
        <Button
          onPress={() => {
            this.save_to_db();
          }}
          title="save to db"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={() => {
            this.retrive_from_db();
          }}
          title="retrive from bd"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}
