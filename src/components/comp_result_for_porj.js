import React, { Component } from "react";

import { CardItem, Body, Item, Label, Input, Button, Text, Card, Icon, Container } from "native-base";
import { Image, Platform } from "react-native";
// import firebase
import db from "firebase";

class ResultForPorJ extends Component {

    constructor(props) {
        super(props)
        alert('in Result for porj ' + JSON.stringify(this.props.measurements))
        this.state = {
            measurements: this.props.measurements,
            clothType: this.props.clothType,
            imageURL: this.props.imageURL
        }
    }

    render() {
        return (
            <Container>

                <CardItem>
                    <Icon name="heart" style={{ color: '#ED4A6A' }} />

                    <Text>{this.state.clothType}</Text>
                </CardItem>
                <CardItem bordered>
                    <Body>
                        <Item inlineLabel>
                            <Label>Length</Label>
                            <Input
                                returnKeyType={"next"}
                                onSubmitEditing={() => {
                                    this.TextInput2._root.focus();
                                }}
                                keyboardType="numeric"
                                onChangeText={length => this.setMesurements("length", length)}
                                value={`${this.state.measurements[this.state.clothType].length}`}
                            />
                        </Item>
                        <Item inlineLabel>
                            <Label>Waist</Label>
                            <Input
                                returnKeyType={"next"}
                                ref={input => {
                                    this.TextInput2 = input;
                                }}
                                onSubmitEditing={() => {
                                    this.TextInput3._root.focus();
                                }}
                                keyboardType="numeric"
                                onChangeText={waist => this.setMesurements("waist", waist)}
                                value={`${this.state.measurements[this.state.clothType].waist}`}
                            />
                        </Item>
                        <Item inlineLabel>
                            <Label>Seat</Label>
                            <Input
                                returnKeyType={"next"}
                                ref={input => {
                                    this.TextInput3 = input;
                                }}
                                onSubmitEditing={() => {
                                    this.TextInput4._root.focus();
                                }}
                                keyboardType="numeric"
                                onChangeText={seat => this.setMesurements("seat", seat)}
                                value={`${this.state.measurements[this.state.clothType].seat}`}
                            />
                        </Item>
                        <Item inlineLabel>
                            <Label>Fork</Label>
                            <Input
                                returnKeyType={"next"}
                                ref={input => {
                                    this.TextInput4 = input;
                                }}
                                onSubmitEditing={() => {
                                    this.TextInput5._root.focus();
                                }}
                                keyboardType="numeric"
                                onChangeText={fork => this.setMesurements("fork", fork)}
                                value={`${this.state.measurements[this.state.clothType].fork}`}
                            />
                        </Item>
                        <Item inlineLabel>
                            <Label>Thigh</Label>
                            <Input
                                returnKeyType={"next"}
                                ref={input => {
                                    this.TextInput5 = input;
                                }}
                                onSubmitEditing={() => {
                                    this.TextInput6._root.focus();
                                }}
                                keyboardType="numeric"
                                onChangeText={thigh => this.setMesurements("thigh", thigh)}
                                value={`${this.state.measurements[this.state.clothType].thigh}`}
                            />
                        </Item>
                        <Item inlineLabel>
                            <Label>Knee</Label>
                            <Input
                                returnKeyType={"next"}
                                ref={input => {
                                    this.TextInput6 = input;
                                }}
                                onSubmitEditing={() => {
                                    this.TextInput7._root.focus();
                                }}
                                keyboardType="numeric"
                                onChangeText={knee => this.setMesurements("knee", knee)}
                                value={`${this.state.measurements[this.state.clothType].knee}`}
                            />
                        </Item>
                        <Item inlineLabel>
                            <Label>Bottom</Label>
                            <Input
                                returnKeyType={"next"}
                                ref={input => {
                                    this.TextInput7 = input;
                                }}
                                onSubmitEditing={() => {
                                    this.TextInput8._root.focus();
                                }}
                                keyboardType="numeric"
                                onChangeText={bottom => this.setMesurements("bottom", bottom)}
                                value={`${this.state.measurements[this.state.clothType].bottom}`}
                            />
                        </Item>
                        <Item inlineLabel>
                            <Label>Back Rise</Label>
                            <Input
                                ref={input => {
                                    this.TextInput8 = input;
                                }}
                                keyboardType="numeric"
                                onChangeText={backrise =>
                                    this.setMesurements("backrise", backrise)
                                }
                                value={`${this.state.measurements[this.state.clothType].backrise}`}
                            />
                        </Item>
                        <Image
                            style={{
                                height: 200,
                                width: 320,
                                // resizeMode: "stretch"
                            }}
                            source={{ uri: this.state.imageURL }}
                        />
                        <Button block info onPress={() => this.pickImage()}>
                            <Text> Upload Image </Text>
                        </Button>
                        <Button block primary onPress={() => this.saveToDB()}>
                            <Text> Submit </Text>
                        </Button>
                    </Body>
                </CardItem>
            </Container>
        )
    }

}
export default ResultForPorJ;