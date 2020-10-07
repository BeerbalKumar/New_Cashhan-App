/*This is an example of React Native App Intro Slider */
import React from "react";
//import react in project

import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
//import all the required component

import AppIntroSlider from "react-native-app-intro-slider";
//import AppIntroSlider to use it
import Navigator from "./src/Config/Navigation/navigation";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showRealApp: false,
      isNavigation: false,
    };
  }
  _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <TouchableOpacity onPress={()=>this.setState({ isNavigation: true })}>
          <Text
            style={{
              color: "#347AF0",
              marginTop: 50,
              textAlign: "right",
              marginRight: "7%",
            }}
          >
            Skip
          </Text>
        </TouchableOpacity>
        <Image
          source={item.image}
          style={{
            width: "90%",
            height: 240,
            alignSelf: "center",
            marginTop: 30,
          }}
        />
        <View
          style={{
            backgroundColor: "#fff",
            marginHorizontal: 10,
            marginVertical: 40,
            paddingBottom: 300,
            paddingTop: 30,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}
        >
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  };

  _renderNextButton = () => {
    return (
      <View style={styles.nextBtn}>
        <Text
          style={{ color: "#347AF0", textAlign: "center", fontWeight: "bold" }}
        >
          Next Step
        </Text>
      </View>
    );
  };
  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Text style={styles.textDone}>Let's Get Started</Text>
      </View>
    );
  };
  _onDone = () => {
    this.setState({ isNavigation: true });
  };
  onslideCahnge = (index, lastIndex) => {
    console.log(index, lastIndex);
  };
  render() {
    if (this.state.showRealApp) {
      return <App />;
    } else {
      return this.state.isNavigation === true ? (
        <Navigator />
      ) : (
        <AppIntroSlider
          renderItem={this._renderItem}
          data={slides}
          onDone={this._onDone}
          renderDoneButton={this._renderDoneButton}
          renderNextButton={this._renderNextButton}
          dotStyle={{ backgroundColor: "#F2F2F2", marginTop: -710 }}
          activeDotStyle={{ backgroundColor: "#347AF0", marginTop: -710 }}
          onSlideChange={(index, lastIndex) =>
            this.onslideCahnge(index, lastIndex)
          }
          backgroundColor="black"
        />
      );
    }
  }
}
const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
  text: {
    color: "grey",
    fontSize: 16,
    textAlign: "center",
    width: "90%",
    alignSelf: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "black",
    backgroundColor: "transparent",
    textAlign: "center",
    marginTop: 16,
    width: "80%",
    alignSelf: "center",
  },
  slide: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },
  buttonCircle: {
    borderColor: "#347AF0",
    borderWidth: 1,
    padding: "5%",
    borderRadius: 50,
    width: "78%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#347AF0",
    marginRight: "40%",
    // marginTop:-50
  },
  textDone: {
    color: "white",
  },
  nextBtn: {
    backgroundColor: "white",
    borderColor: "#347AF0",
    borderWidth: 1,
    padding: "5%",
    paddingLeft: "20%",
    paddingRight: "20%",
    borderRadius: 50,
    marginRight: "22%",
  },
});

const slides = [
  {
    key: "s1",
    text: "Manage all your chnd assets its simple and easy!",
    title: "Welcome to CASHHAND",
    titleStyle: styles.title,
    textStyle: styles.text,
    image: require("./assets/images/desktop.png"),
  },
  {
    key: "s2",
    title: "Nice and Tidy CHND Wallet",
    titleStyle: styles.title,
    text: "Keep Cashhand shop and share wiith Friends and Family !.",
    image: require("./assets/images/idea.png"),
  },
  {
    key: "s3",
    title: "Receive and Send Chnd to Friends!",
    titleStyle: styles.title,
    text: "Send Chnd to your friends with a personal message attached.",
    image: require("./assets/images/social.png"),
    backgroundColor: "#22bcb5",
  },

  {
    key: "s4",
    title: "Your Safety is Our Top Priority",
    titleStyle: styles.title,
    text: " Our top-notch security features will keep you completely safe.",
    image: require("./assets/images/mobile.png"),
    backgroundColor: "#febe29",
  },
];
