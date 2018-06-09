import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  Platform,
  Button,
  View
} from "react-native";
import db from "firebase";
import RNFetchBlob from "react-native-fetch-blob";

// var ImagePicker = require("react-native-image-picker");
import ImagePicker from "react-native-image-picker";

// More info on all the options is below in the README...just some common use cases shown here
var options = {
  title: "Select Avatar",
  customButtons: [{ name: "fb", title: "Choose Photo from Facebook" }],
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

export default class Apps extends Component {
  constructor() {
    super();
    this.getImage = this.getImage.bind(this);
    this.state = {
      image_uri: "https://avatars0.githubusercontent.com/u/12028011?v=3&s=200"
    };
  }

  uploadImage(uri, mime = "application/octet-stream") {
    return new Promise((resolve, reject) => {
      const uploadUri =
        Platform.OS === "ios" ? uri.replace("file://", "") : uri;
      let uploadBlob = null;

      const imageRef = db
        .storage()
        .ref("images")
        .child("image_001");

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

  getImage() {
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
        //   this.uploadImage(response.uri)
        //     .then(url => {
        //       try {
        //         alert("uploaded");
        //         // let dbCon = db.database().ref("/test");
        //         // let orderID = this.state.basicInfo.orderID;
        //         // let orderID = this.state.order.orderID;
        //         // dbCon.push({ image_uri: url });
        //         this.setState({ image_uri: url });
        //       } catch (error) {
        //         console.log("error is ", error);
        //       }
        //     })
        //     .catch(error => console.log(error));
      }
    });
  }

  pickImage() {
    ImagePicker.showImagePicker(options, response => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        // var data = new FormData();
        // console.log("file path ", response.path);
        // data.append("file", response.path);
        // data.append("upload_preset", "pixolo");

        // var xhr = new XMLHttpRequest();
        // xhr.withCredentials = true;
        // console.log("Object details is ", xhr);

        // xhr.onreadystatechange = e => {
        //   if (xhr.readyState === 4) {
        //     alert("response text ", xhr.responseText);
        //     console.log(xhr.responseText);
        //   }
        //   if (this.status === 200) {
        //     console.log("success", xhr.responseText);
        //   } else {
        //     console.warn("error " + xhr.responseText);
        //   }
        // };

        // xhr.open(
        //   "POST",
        //   "https://api.cloudinary.com/v1_1/farhanpixolo/image/upload"
        // );
        // xhr.setRequestHeader("cache-control", "no-cache");

        // xhr.send(data);

        let upload_preset = "pixolo";

        let cloud = "farhanpixolo";

        let upload_url =
          "https://api.cloudinary.com/v1_1/" + cloud + "/image/upload";

        let xhr = new XMLHttpRequest();

        xhr.open("POST", upload_url);

        xhr.onload = () => {
          console.log(xhr);
        };

        let formdata = new FormData();

        formdata.append("file", {
          uri: response.uri,
          type: "image/jpeg",
          name: response.fileName
        });
        formdata.append("upload_preset", upload_preset);

        xhr.send(formdata);

        //   // this.setState({ image: response.uri });

        //   // let base64Img = `data:image/jpg;base64,${response.base64}`;
        //   let base64Img = response.path;

        //   //Add your cloud name

        //   let apiUrl =
        //     "https://api.cloudinary.com/v1_1/farhanpixolo/image/upload";

        //   let data = {
        //     file: base64Img,

        //     upload_preset: "pixolo"
        //   };

        //   fetch(apiUrl, {
        //     body: JSON.stringify(data),

        //     headers: {
        //       "content-type": "application/json"
        //     },

        //     method: "POST"
        //   })
        //     .then(r => {
        //       let data = r._bodyText;

        //       console.log(r);
        //     })
        //     .catch(err => console.log(err));
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to our Example using Firebase Storage and Camera!
        </Text>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: this.state.image_uri }}
        />
        <Button onPress={this.pickImage} title="Change Image" color="#841584" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
