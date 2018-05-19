import React, { Component } from "react";
import { View, Text, Button, TextInput } from "react-native";

import { connect } from "react-redux";

import { updateUser } from "../actions/user-actions";

import { ActionCreator, bindActionCreators } from "redux";

class Register extends Component {
  constructor(props) {
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }
  onUpdateUser(event) {
    this.props.onUpdateUser(event.nativeEvent.text);
    // console.log("in update user", event);
    // console.log("in update user", event.nativeEvent.text);
  }

  render() {
    console.log("From Register ", this.props);

    return (
      <View>
        <Text>Hello</Text>

        {/* <Button
          onPress={() => {
            this.onUpdateUser();
          }}
          title="save to db"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        /> */}

        <TextInput
          onChange={this.onUpdateUser}
          style={{ height: 50, width: 100 }}
        />

        <Text>{this.props.user}</Text>
      </View>
    );
  }
}

const mapStateToApp = (state, props) => {
  console.log("props is ", props);

  return {
    products: state.products,
    user: state.user,
    userPlusProps: `${state.user} ${props.aRandom}`
  };
};

const mapActionToProps = (dispatch, props) => {
  return bindActionCreators(
    {
      onUpdateUser: updateUser
    },
    dispatch
  );
};

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
  console.log("In merge props ", propsFromState, propsFromDispatch, ownProps);

  return {};
};
export default connect(mapStateToApp, mapActionToProps, mergeProps)(Register);
