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
import ResultForSork from './comp_result_for_sork';
import ResultForPorJ from './comp_result_for_porj';

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
            basicInfo: {},
            measurements: [

                {
                    shirt: {
                        chest: 100,
                        collom: 100,
                        cuff: 100,
                        frontfix: 100,
                        length: 100,
                        seat: 100,
                        shoulder: 100,
                        sleeves: 100,
                        stomach: 100,
                    }
                }

            ],

            measurementsType: [],

        }
    }
    componentWillMount() {
        const { navigation } = this.props;
        const measurement = navigation.getParam('measurements', 'NO-measurements');
        const basicInfo = navigation.getParam('basicInfo', { name: 'error', gender: 'error', mobile: 'error' })

        // alert('basic info result' + JSON.stringify(basicInfo))
        // alert('measurements ' + JSON.stringify(measurement))


        // this.state.measurements.push(measurement);
        // this.setState({
        //     measurements: measurement
        // })
        this.state.measurements = measurement
        // this.state.measurements.forEach((element, index) => {
        //     for (var key in element) {


        //         this.state.measurementsType.push(key)
        //         // alert('first prop ' + index + ' ' + JSON.stringify(this.state.measurementsType[0]))
        //         // break;

        //     }
        // });
        // this.setState({
        //     basicInfo: basicInfo
        // })
        alert('basic Info ' + typeof this.state.basicInfo)
    }
    componentDidMount() {
        // this.state.measurements.shift()





        // alert('in render measurements ' + JSON.stringify(this.state.measurements))
    }

    render() {
        // console.log('in render measurements ', this.state.measurements);
        // alert('in render measurements ' + JSON.stringify(this.state.basicInfo.name))


        return (

            < Container >
                <Header />
                <View>
                    <FlatList
                        data={this.state.measurements}
                        renderItem={({ item, index }) =>
                            <Card style={{ elevation: 3 }}>
                                <CardItem>
                                    <Left>
                                        {/* <Thumbnail source={item.image} /> */}
                                        <Body>
                                            <Text>{this.state.basicInfo.name}</Text>
                                            <Text note>{this.state.basicInfo.gender}</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem cardBody>
                                    {/* <Image style={{ height: 300, flex: 1 }} source={item.image} /> */}
                                </CardItem>
                                <CardItem>
                                    <Icon name="call" style={{ color: '#ED4A6A' }} />
                                    <Text>{this.state.basicInfo.mobile}</Text>
                                </CardItem>
                                {/* {

                                    this.state.measurementsType[0] == 'shirt' || this.state.measurementsType[0] == 'kurta' ? (
                                        <ResultForSork
                                            measurements={item}
                                            clothType={this.state.measurementsType[index]} />
                                    ) : (
                                            <ResultForPorJ measurements={item}
                                                clothType={this.state.measurementsType[index]} />
                                        )
                                } */}
                            </Card>
                        }
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </Container >
        );
    }
}