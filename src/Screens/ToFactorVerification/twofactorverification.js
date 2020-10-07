import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
export default class TwoFactorVerification extends React.Component {
  constructor() {
    super();
    this.state = {
      firstScreen: true,
      secondScreen: false,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.firstScreen === true ? (
          <View>
            <View style={styles._View}>
              <Text style={styles._Text1}>
                Scan the QR code or enter the code manually in your auth app
              </Text>
            </View>
            <View style={styles._View1}>
              <Image
                source={require("./../../../assets/images/Bitmap.png")}
                style={{
                  width: "43%",
                  height: 150,
                  alignSelf: "center",
                  marginTop: 60,
                }}
              />
              <Text style={styles._Text2}>
                3M8w2knJKsr3jqMatY{"\n"} iyuraxVvZAmuZy24lK8
              </Text>
              <TouchableOpacity style={styles._Touch1}>
                <Text style={styles._Text3}>Copy</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles._Touch2}
                onPress={() =>
                  this.setState({ firstScreen: false, secondScreen: true })
                }
              >
                <Text style={styles._Text4}>Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}

        {this.state.secondScreen == true ? (
          <View>
            <View style={styles._View}>
              <Text style={styles._Text1}>
                Please enter the confirmation code from your auth app
              </Text>
            </View>
            <View style={styles._View1}>
              <View style={styles.inputView}>
                <TextInput
                  style={styles.input}
                  placeholder="Confirmation code"
                  placeholderTextColor="#3D4C63"
                />
              </View>
              <TouchableOpacity style={styles._Touch1}>
                <Text style={styles._Text3}>Paste Code</Text>
              </TouchableOpacity>
                <TouchableOpacity style={styles._Touch2}>
                  <Text style={styles._Text4}>Done</Text>
                </TouchableOpacity>
            </View>
          </View>
        ) : null}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },
  _View: {
    alignSelf: "center",
    marginTop: 75,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  _Text1: {
    color: "#485068",
    textAlign: "center",
    fontSize: 14,
  },
  _View1: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "white",
    marginTop: 150,
    height: 500,
    // "120%"
  },
  _Text2: {
    color: "#485068",
    textAlign: "center",
    fontSize: 17,
    marginTop: "9%",
  },
  _Touch1: {
    alignSelf: "center",
    marginTop: "15%",
  },
  _Text3: {
    color: "#485068",
    textAlign: "center",
    fontSize: 17,
    color: "#347AF0",
  },
  _Touch2: {
    alignSelf: "center",
    width: "73%",
    backgroundColor: "#347AF0",
    padding: 12,
    borderRadius: 30,
    position: "absolute",
    bottom: 10,
  },
  _Text4: {
    color: "#485068",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  _ViewOp: {
    // padding:40,
  },
  inputView: {
    width: "89%",
    borderBottomWidth: 1,
    borderBottomColor: "#CFD2D8",
    alignSelf: "center",
    flexDirection: "row",
    marginTop: 40,
  },
  input: {
    width: "90%",
    fontSize: 20,
    padding: "3%",
  },
});
