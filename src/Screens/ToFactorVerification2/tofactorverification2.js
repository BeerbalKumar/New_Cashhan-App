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
import { Feather } from "@expo/vector-icons";

export default class TwoFactorVerificationSec extends React.Component {
  constructor() {
    super();
    this.state = {
      passwordSecurity: true,
    };
  }
  render() {
    return (
      <View style={styles.container}>
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
                secureTextEntry={this.state.passwordSecurity}
              />
              {this.state.passwordSecurity === true ? (
                <Feather
                  name="eye"
                  size={24}
                  color="black"
                  onPress={() => this.setState({ passwordSecurity: false })}
                />
              ) : (
                <Feather
                  name="eye-off"
                  size={24}
                  color="black"
                  onPress={() => this.setState({ passwordSecurity: true })}
                />
              )}
            </View>
            <TouchableOpacity style={styles._Touch1}>
              <Text style={styles._Text3}>Paste Code</Text>
            </TouchableOpacity>
            <View style={styles._ViewOp}>
              <TouchableOpacity style={styles._Touch2}>
                <Text style={styles._Text4}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
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
  _View: {
    alignSelf: "center",
    marginTop: "13%",
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
    marginTop: "15%",
    width: "73%",
    backgroundColor: "#347AF0",
    padding: 12,
    borderRadius: 30,
  },
  _Text4: {
    color: "#485068",
    textAlign: "center",
    fontSize: 23,
    fontWeight: "bold",
    color: "white",
  },
  _ViewOp: {
    // padding:40,
  },
});
