import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Right,
  Left,
  Button,
  Icon,
  Body,
  Title,
  Card,
  CardItem,
  Text,
  View,
  Picker
} from "native-base";

// import Expo from "expo";


// import for SorK and PorJ
import MeasurementsForSorK from "./comp_measurements_for_sork";
import MeasurementsForPorJ from "./comp_measurements_for_porj";
import Home from './comp_home';


import db from "firebase";

export default class InlineLabelExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "name",
      enabled: false,
      loading: true,
      Sork: true,
      measurements: null,
      name: null,
      orderno: null,
      contactno: null,
      searchstring: 'abc',
      basicInfo: {},
      clothType: {},
      order: {}
    };
  }

  // async UNSAFE_componentWillMount() {
  //   await Expo.Font.loadAsync({
  //     Roboto: require("native-base/Fonts/Roboto.ttf"),
  //     Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
  //     Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
  //   });
  //   this.setState({ loading: false });
  // }

  UNSAFE_componentWillMount() {
    this.setState({
      basicInfo: {
        name: "",
        mobile: "",
        gender: ""
      },
      clothType: {
        type: "shirt"
      },
      order: {
        orderID: 0,
        orderIDError: false
      }
    });
  }

  _setstatenull() {
    this.setState({
      name: null,
      orderno: null,
      contactno: null
    });
  }

  async _handlepress() {
    try {
      // const Data = await db.database().ref("/orders");
      // const queryrep = await Data.orderByValue().equalTo("1");
      // Toast.show(queryrep);
      // console.log(queryrep);
      var recentPostsRef = await db.database().ref("/orders");
      // recentPostsRef.once("value").then(snapshot => {
      //   console.log(snapshot.val());
      //   console.log(snapshot.toJSON());
      //   console.log(snapshot.key);
      //   console.log(snapshot.child("1").val());
      // });

      var searchquery = null;
      switch (this.state.selected) {

        case 'contactno':

          searchquery = this.state.searchstring;
          var resultmob = null;

          recentPostsRef
            .orderByChild("mobile")
            .limitToFirst(1)
            .equalTo(searchquery)
            .on("value", snapshot => {
              snapshot.forEach(function (child) {
                console.log(child.key);
                resultmob = child.key;
              });
            });
          recentPostsRef.child(resultmob).on("value", snapshot => {
            this.setState({ measurements: snapshot.val() });
            console.log(snapshot.val());

            snapshot.forEach(function (data) {
              // console.log(data.key);
            });

            if (
              snapshot.child("measurements/shirt").exists() ||
              snapshot.child("measurements/kurta").exists()
            ) {
              this.setState({
                sork: true
              });
            } else {
              this.setState({
                sork: false
              });
            }
            this.setState({
              enabled: true
            });

            this._setstatenull();
            this.props.navigation.navigate("Results", this.state);
          });

          break;
        case 'orderno':

          alert('in order' + this.state.searchstring);
          searchquery = this.state.searchstring;
          recentPostsRef.child(searchquery).once("value", snapshot => {

            // console.log(snapshot.val());
            let result = [];
            result.push(snapshot.val().measurements);
            const results = snapshot.val();
            // alert('result ' + JSON.stringify(result))
            if (result && result != null) {
              this.setState({ measurements: result });

              this.setState({
                basicInfo: {
                  name: results.name,
                  gender: results.gender,
                  mobile: results.mobile
                }
              })
              // alert('basic info ' + JSON.stringify(this.state.basicInfo));
              snapshot.forEach(function (data) {
                // console.log(data.key);
              });



              this._setstatenull();
              this.props.navigation.push("Result",
                {
                  measurements: this.state.measurements,
                  basicInfo: this.state.basicInfo
                }

              );

            }


          });


          break;
        case 'name':

          let result = null;
          searchquery = this.state.searchstring;

          let totalresult = [];

          let basicInfo = {};

          recentPostsRef
            .orderByChild("name")
            .equalTo(searchquery)
            .once("value", snapshot => {
              // alert('snapshot ' + JSON.stringify(snapshot))
              snapshot.forEach(function (val) {
                // console.log(child.key);
                // result = val.key;
                totalresult.push(val.child('measurements'));

              });
              snapshot.forEach(function (val) {
                // console.log(child.key);
                // result = val.key;
                // totalresult.push(val.child('measurements'));
                basicInfo['name'] = val.child('name');
                basicInfo['gender'] = val.child('gender');
                basicInfo['mobile'] = val.child('mobile');

              });
              this.setState({
                basicInfo: basicInfo,
                measurements: totalresult
              })
              // alert('basic Info' + JSON.stringify(this.state.basicInfo))
              // alert('measurements ' + JSON.stringify(this.state.measurements))

              this._setstatenull();
              this.props.navigation.push("Result",
                {
                  measurements: this.state.measurements,
                  basicInfo: this.state.basicInfo
                }

              );

              // alert('measurements ' + JSON.stringify(totalresult))

            });



          // recentPostsRef.child(result).on("value", snapshot => {
          //   this.setState({ measurements: snapshot.val() });
          //   console.log(snapshot.val());
          //   console.log(totalresult.length);
          //   snapshot.forEach(function (data) {
          //     // console.log(data.key);
          //   });

          //   if (
          //     snapshot.child("measurements/shirt").exists() ||
          //     snapshot.child("measurements/kurta").exists()
          //   ) {
          //     this.setState({
          //       sork: true
          //     });
          //   } else {
          //     this.setState({
          //       sork: false
          //     });
          //   }
          //   this.setState({
          //     enabled: true
          //   });

          //   this._setstatenull();
          //   this.props.navigation.navigate("Results", this.state);
          // });
          break;
        default:
          alert('please enter a valid query.' + this.state.selected);
          break;
      }



    } catch (error) {
      console.log(error);
      alert('Error is ' + error);
    }
  }

  onValueChange(value) {
    this.setState({
      selected: value
    });
  }

  render() {
    // if (this.state.loading) {
    //   return <Expo.AppLoading />;
    // }
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("Home")}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Manage</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Form>
            <Card>
              <CardItem header bordered>
                <Text>Search By:-</Text>
              </CardItem>
              <CardItem bordered>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="ios-arrow-down-outline" />}
                  style={{ width: undefined }}
                  selectedValue={this.state.selected}
                  onValueChange={this.onValueChange.bind(this)}
                >
                  <Picker.Item label="Name" value="name" />
                  <Picker.Item label="Order No" value="orderno" />
                  <Picker.Item label="Contact No" value="contactno" />
                </Picker>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <Item inlineLabel>
                    <Label>Search</Label>
                    <Input
                      onChangeText={searchstring =>
                        this.setState({ searchstring: searchstring })
                      }
                      value={this.state.searchstring}
                    />
                  </Item>
                </Body>
              </CardItem>
              <Button block info onPress={this._handlepress.bind(this)}>
                <Text> Enter </Text>
              </Button>


            </Card>
          </Form>

        </Content>

      </Container>

    );
  }
}