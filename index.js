import { AppRegistry } from "react-native";
import App from "./App";
import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCbxz1wsoDqPPrCzcKjPsjO5GREP6dXmgo",
  authDomain: "tailorapp-fd888.firebaseapp.com",
  databaseURL: "https://tailorapp-fd888.firebaseio.com",
  projectId: "tailorapp-fd888",
  storageBucket: "tailorapp-fd888.appspot.com",
  messagingSenderId: "324041981378"
};
firebase.initializeApp(config);

//Handle Firebase warning
console.ignoredYellowBox = [
  "Setting a timer for a long period of time",
  "Possible Unhandled Promise Rejection"
];

AppRegistry.registerComponent("Fragementation", () => App);
