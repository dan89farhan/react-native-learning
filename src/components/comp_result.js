import React, { Component } from "react";
import {
    Container,
    Header,
    View,
    DeckSwiper,
    Card,
    CardItem,
    Thumbnail,
    Text,
    Left,
    Body,
    Icon,
    Button,
    Item,
    Label,
    Input
} from "native-base";
import { Image, FlatList } from 'react-native';

const cards = [
    // {
    //     text: 'Card One',
    //     name: 'One',
    //     image: require('../assests/login.png'),
    // },
    // {
    //     text: 'Card One',
    //     name: 'One',
    //     image: require('../assests/login.png'),
    // },

];
export default class SearchResults extends Component {

    constructor(props) {
        super(props);
        this.state = {
            measurements: [

            ],
            temp: false
        }
    }
    componentDidMount() {
        // this.state.measurements.push( this.props.measurements) 
        const { navigation } = this.props;
        const measurements = navigation.getParam('measurements', 'NO-measurements');

        this.state.measurements.push(measurements)
        this.state.measurements.push(measurements)
        this.setState({
            temp: false
        })
        this.forceUpdate()
        // alert('measurements ' + JSON.stringify(this.state.measurements))
        console.log('measurements ', this.state.measurements);

        // this.setState({ measurements: measurements })
        // const otherParam = navigation.getParam('otherParam', 'some default value');

    }

    render() {
        console.log('in render measurements ', this.state.measurements);
        return (
            <Container>
                <Header />
                <View>
                    <FlatList
                        data={this.state.measurements}
                        renderItem={({ item }) =>
                            <Card style={{ elevation: 3 }}>
                                {/* <CardItem>
                                    <Left>
                                        <Thumbnail source={item.image} />
                                        <Body>
                                            <Text>{item.text}</Text>
                                            <Text note>NativeBase</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem cardBody>
                                    <Image style={{ height: 300, flex: 1 }} source={item.image} />
                                </CardItem>
                                <CardItem>
                                    <Icon name="heart" style={{ color: '#ED4A6A' }} />
                                    <Text>{item.name}</Text>
                                </CardItem> */}

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
                                            // value={`${this.state.measurements.length}`}
                                            />
                                        </Item>
                                        <Item inlineLabel>
                                            <Label>Shoulder</Label>
                                            <Input
                                                returnKeyType={"next"}
                                                ref={input => {
                                                    this.TextInput2 = input;
                                                }}
                                                onSubmitEditing={() => {
                                                    this.TextInput3._root.focus();
                                                }}
                                                keyboardType="numeric"
                                                onChangeText={shoulder =>
                                                    this.setMesurements("shoulder", shoulder)
                                                }
                                            // value={`${this.state.measurements.shoulder}`}
                                            />
                                        </Item>
                                        <Item inlineLabel>
                                            <Label>Sleeves</Label>
                                            <Input
                                                returnKeyType={"next"}
                                                ref={input => {
                                                    this.TextInput3 = input;
                                                }}
                                                onSubmitEditing={() => {
                                                    this.TextInput4._root.focus();
                                                }}
                                                keyboardType="numeric"
                                                onChangeText={sleeves => this.setMesurements("sleeves", sleeves)}
                                            // value={`${this.state.measurements.sleeves}`}
                                            />
                                        </Item>
                                        <Item inlineLabel>
                                            <Label>Chest</Label>
                                            <Input
                                                returnKeyType={"next"}
                                                ref={input => {
                                                    this.TextInput4 = input;
                                                }}
                                                onSubmitEditing={() => {
                                                    this.TextInput5._root.focus();
                                                }}
                                                keyboardType="numeric"
                                                onChangeText={chest => this.setMesurements("chest", chest)}
                                            // value={`${this.state.measurements.chest}`}
                                            />
                                        </Item>
                                        <Item inlineLabel>
                                            <Label>Stomach</Label>
                                            <Input
                                                returnKeyType={"next"}
                                                ref={input => {
                                                    this.TextInput5 = input;
                                                }}
                                                onSubmitEditing={() => {
                                                    this.TextInput6._root.focus();
                                                }}
                                                keyboardType="numeric"
                                                onChangeText={stomach => this.setMesurements("stomach", stomach)}
                                            // value={`${this.state.measurements.stomach}`}
                                            />
                                        </Item>
                                        <Item inlineLabel>
                                            <Label>Seat</Label>
                                            <Input
                                                returnKeyType={"next"}
                                                ref={input => {
                                                    this.TextInput6 = input;
                                                }}
                                                onSubmitEditing={() => {
                                                    this.TextInput7._root.focus();
                                                }}
                                                keyboardType="numeric"
                                                onChangeText={seat => this.setMesurements("seat", seat)}
                                            // value={`${this.state.measurements.seat}`}
                                            />
                                        </Item>
                                        <Item inlineLabel>
                                            <Label>Frontfix</Label>
                                            <Input
                                                returnKeyType={"next"}
                                                ref={input => {
                                                    this.TextInput7 = input;
                                                }}
                                                onSubmitEditing={() => {
                                                    this.TextInput8._root.focus();
                                                }}
                                                keyboardType="numeric"
                                                onChangeText={frontfix =>
                                                    this.setMesurements("frontfix", frontfix)
                                                }
                                            // value={`${this.state.measurements.frontfix}`}
                                            />
                                        </Item>
                                        <Item inlineLabel>
                                            <Label>Collom</Label>
                                            <Input
                                                returnKeyType={"next"}
                                                ref={input => {
                                                    this.TextInput8 = input;
                                                }}
                                                onSubmitEditing={() => {
                                                    this.TextInput9._root.focus();
                                                }}
                                                keyboardType="numeric"
                                                onChangeText={collom => this.setMesurements("collom", collom)}
                                            // value={`${this.state.measurements.collom}`}
                                            />
                                        </Item>
                                        <Item inlineLabel>
                                            <Label>Cuff</Label>
                                            <Input
                                                ref={input => {
                                                    this.TextInput9 = input;
                                                }}
                                                keyboardType="numeric"
                                                onChangeText={cuff => this.setMesurements("cuff", cuff)}
                                            // value={`${this.state.measurements.cuff}`}
                                            />
                                        </Item>
                                        <Image
                                            style={{
                                                height: 200,
                                                width: 320,
                                                resizeMode: "stretch"
                                            }}
                                            source={item.image}
                                        />
                                        <Button block info onPress={() => this.pickImage()}>
                                            <Text> Upload Image </Text>
                                        </Button>
                                        <Button block primary onPress={() => this.saveToDB()}>
                                            <Text> Submit </Text>
                                        </Button>
                                    </Body>
                                </CardItem>
                            </Card>
                        }
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </Container>
        );
    }
}