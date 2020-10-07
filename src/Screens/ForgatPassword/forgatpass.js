import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { Feather, AntDesign, Ionicons } from "@expo/vector-icons";

export default class ForgatPass extends React.Component {
  constructor() {
    super();
    this.state = {
      passwordSecurity: true,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            Enter Your regisreted email address to recieve password reset
            instruction
          </Text>
        </View>
        <View></View>
        <ScrollView>
          <View style={styles.bottomView}>
            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                placeholder="Email address"
                placeholderTextColor="#3D4C63"
              />
            </View>
            <TouchableOpacity
              style={styles.walletBtn}
              onPress={() => this.props.navigation.navigate("chekEmail")}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                Reset Password
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },
  loginTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#0D1F3C",
    textAlign: "center",
    alignSelf: "center",
    marginLeft: "25%",
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
  walletBtn: {
    backgroundColor: "#347AF0",
    textAlign: "center",
    width: "70%",
    alignSelf: "center",
    padding: "4%",
    borderRadius: 50,
    marginTop: "22%",
  },
  header: {
    flexDirection: "row",
    top: 50,
    width: "85%",
    alignSelf: "center",
  },
  headerText: {
    textAlign: "center",
    top: 20,
    width: "80%",
    alignSelf: "center",
    color: "#485068",
    marginLeft:"10%"
  },
  bottomView: {
    width: "100%",
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: "74%",
    paddingBottom: 235,
  },
});
