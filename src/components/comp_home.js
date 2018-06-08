import React, { Component } from "react";
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Picker,
  Icon,
  Header,
  Left,
  Right,
  Body,
  Title,
  Button,
  Card,
  CardItem,
  Text
} from "native-base";

import { Platform } from "react-native";

// import Expo from "expo";

// import Fetch Blob for image
import RNFetchBlob from "react-native-fetch-blob";

// import Imagepicker for image
import ImagePicker from "react-native-image-picker";

// import for SorK and PorJ
import MeasurementsForSorK from "./comp_measurements_for_sork";
import MeasurementsForPorJ from "./comp_measurements_for_porj";

// import firebase
import db from "firebase";

// options for images
var options = {
  title: "Select from below",

  storageOptions: {
    skipBackup: true,
    path: "images"
  }
};
// Prepare Blob support
const Blob = RNFetchBlob.polyfill.Blob;
const fs = RNFetchBlob.fs;
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = Blob;

export default class StackedLabelExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "Shirt",
      loading: true,
      Sork: true,
      basicInfo: {},
      clothType: {},
      order: {}
    };
  }

  UNSAFE_componentWillMount() {
    this.setState({
      basicInfo: {
        name: "",
        mobile: "",
        gender: "",

        imageUrl: ""
      },
      clothType: {
        type: "shirt"
      },
      order: {
        orderID: ""
      }
    });
  }

  onValueChange(currentValue) {
    let temp = null;

    console.log("current Value is ", currentValue);

    if (currentValue == "shirt" || currentValue == "kurta") {
      temp = true;
    } else {
      temp = false;
    }

    this.setState({
      selected: currentValue,
      Sork: temp
    });

    this.setBasicInfo("clothType", currentValue);
  }

  setBasicInfo(key, value) {
    switch (key) {
      case "clothType":
        this.state.clothType.type = value;
        console.log("in switch cloth type ", this.state.clothType);
        break;
      case "orderID":
        this.state.order.orderID = value;
        console.log("in switch order id ", this.state.order);
        break;

      default:
        this.state.basicInfo[key] = value;
        break;
    }

    console.log(this.state.basicInfo);
  }

  // Upload image on firebase

  uploadImage(uri, mime = "application/octet-stream") {
    return new Promise((resolve, reject) => {
      const uploadUri =
        Platform.OS === "ios" ? uri.replace("file://", "") : uri;
      let uploadBlob = null;

      const imageRef = db
        .storage() // referece to storage of firebase
        .ref("images") // storage folder
        .child(this.state.order.orderID); // image name

      fs.readFile(uploadUri, "base64")
        .then(data => {
          return Blob.build(data, { type: `${mime};BASE64` });
        })
        .then(blob => {
          uploadBlob = blob;
          return imageRef.put(blob, { contentType: mime });
        })
        .then(() => {
          uploadBlob.close();
          return imageRef.getDownloadURL();
        })
        .then(url => {
          resolve(url);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  saveImage() {
    ImagePicker.showImagePicker(options, response => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        // let source = { uri: response.uri };
        // this.setState({image_uri: response.uri})

        // You can also display the image using data:
        // let image_uri = { uri: 'data:image/jpeg;base64,' + response.data };

        this.uploadImage(response.uri)
          .then(url => {
            alert("uploaded");
            // this.setState({ basicInfo['imageUrl']: url });
            this.state.basicInfo.imageUrl = url;
          })
          .catch(error => {
            alert(
              "Error while uploading image please make sure you have internet connection " +
                error
            );
            console.log(error);
          });
      }
    });
  }

  render() {
    if (this.state.loading) {
      // return <Expo.AppLoading />;
    }
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Home</Title>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("Manage")}
            >
              <Icon name="arrow-forward" />
            </Button>
          </Right>
        </Header>
        <Content>
          <Form>
            <Card>
              <CardItem header bordered>
                <Text>Basic Info</Text>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <Item inlineLabel>
                    <Label>Name</Label>
                    <Input
                      onChangeText={name => this.setBasicInfo("name", name)}
                      // value={this.state.name}
                    />
                  </Item>
                  <Item inlineLabel last>
                    <Label>Mob</Label>
                    <Input
                      onChangeText={mobile =>
                        this.setBasicInfo("mobile", mobile)
                      }
                    />
                  </Item>
                  <Item inlineLabel last>
                    <Label>Gender</Label>
                    <Input
                      onChangeText={gender =>
                        this.setBasicInfo("gender", gender)
                      }
                    />
                  </Item>
                  <Item inlineLabel last>
                    <Label>Order no</Label>
                    <Input
                      onChangeText={orderID =>
                        this.setBasicInfo("orderID", orderID)
                      }
                    />
                  </Item>
                </Body>
              </CardItem>
              <CardItem header bordered>
                <Text>Select Clothing Type</Text>
              </CardItem>
              <CardItem bordered>
                <Picker
                  mode="dropdown"
                  iosHeader="Select your SIM"
                  iosIcon={<Icon name="ios-arrow-down-outline" />}
                  style={{ width: undefined }}
                  selectedValue={this.state.selected}
                  onValueChange={this.onValueChange.bind(this)}
                >
                  <Picker.Item label="Shirt" value="shirt" />
                  <Picker.Item label="Pant" value="pant" />
                  <Picker.Item label="Jean" value="jean" />
                  <Picker.Item label="Kurta" value="kurta" />
                </Picker>
              </CardItem>
              <CardItem header bordered>
                <Text>Measurements</Text>
              </CardItem>
              <CardItem header bordered>
                <Button block info onPress={this.saveImage.bind(this)}>
                  <Text> Upload Image </Text>
                </Button>
              </CardItem>

              {this.state.Sork ? (
                <MeasurementsForSorK
                  basicInfo={this.state.basicInfo}
                  clothType={this.state.clothType}
                  order={this.state.order}
                />
              ) : (
                <MeasurementsForPorJ
                  basicInfo={this.state.basicInfo}
                  clothType={this.state.clothType}
                  order={this.state.order}
                />
              )}
            </Card>
          </Form>
        </Content>
      </Container>
    );
  }
}
