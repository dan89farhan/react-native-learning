import React, { Component } from "react";

import { CardItem, Body, Item, Label, Input, Button, Text } from "native-base";
// import firebase
import db from "firebase";

class MeasurementsForSorK extends Component {
  constructor(props) {
    super(props);

    this.state = {
      measurements: {
        length: 0,
        shoulder: 0,
        sleeves: 0,
        chest: 0,
        stomach: 0,
        seat: 0,
        frontfix: 0,
        collom: 0,
        cuff: 0
      },

      basicInfo: this.props.basicInfo,
      clothType: this.props.clothType,
      order: this.props.order
    };
  }

  setMesurements(key, value) {
    this.state.measurements[key] = value;
    console.log("basic info ", this.state.basicInfo);
    console.log("measurements ", this.state.measurements);
    console.log("Cloth type ", this.state.clothType);
    console.log('order details ', this.state.order);
    
  }

  saveToDB() {
    let dbCon = db.database().ref("/orders");
    // let orderID = this.state.basicInfo.orderID;
    let orderID = this.state.order.orderID;
    let obj = {};
    obj[orderID] = {};
    obj[orderID] = this.state.basicInfo;
    obj[orderID]["measurements"] = {};
    obj[orderID]["measurements"][
      this.state.clothType.type
    ] = this.state.measurements;

    console.log("obj info ", obj);
    dbCon.set(obj);
  }
  uploadImage() {
    let dbCon = db.storage.ref("/");
    dbCon = dbCon.child("login.png");
    var file = "../assests/login.png";
    dbCon.put(file).then(function(snapshot) {});
    // '../assests/login.png'
  }

  render() {
    return (
      <CardItem bordered>
        <Body>
          <Item inlineLabel>
            <Label>Length</Label>
            <Input
              onChangeText={length => this.setMesurements("length", length)}
            />
          </Item>
          <Item inlineLabel>
            <Label>Shoulder</Label>
            <Input
              onChangeText={shoulder =>
                this.setMesurements("shoulder", shoulder)
              }
            />
          </Item>
          <Item inlineLabel>
            <Label>Sleeves</Label>
            <Input
              onChangeText={sleeves => this.setMesurements("sleeves", sleeves)}
            />
          </Item>
          <Item inlineLabel>
            <Label>Chest</Label>
            <Input
              onChangeText={chest => this.setMesurements("chest", chest)}
            />
          </Item>
          <Item inlineLabel>
            <Label>Stomach</Label>
            <Input
              onChangeText={stomach => this.setMesurements("stomach", stomach)}
            />
          </Item>
          <Item inlineLabel>
            <Label>Seat</Label>
            <Input onChangeText={seat => this.setMesurements("seat", seat)} />
          </Item>
          <Item inlineLabel>
            <Label>Frontfix</Label>
            <Input
              onChangeText={frontfix =>
                this.setMesurements("frontfix", frontfix)
              }
            />
          </Item>
          <Item inlineLabel>
            <Label>Collom</Label>
            <Input
              onChangeText={collom => this.setMesurements("collom", collom)}
            />
          </Item>
          <Item inlineLabel>
            <Label>Cuff</Label>
            <Input onChangeText={cuff => this.setMesurements("cuff", cuff)} />
          </Item>

          <Button block primary onPress={this.saveToDB.bind(this)}>
            <Text> Submit </Text>
          </Button>
        </Body>
      </CardItem>
    );
  }
}
export default MeasurementsForSorK;
