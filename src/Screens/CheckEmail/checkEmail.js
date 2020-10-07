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

export default class CheckEmail extends React.Component {
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
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("forgatPassword")}
          >
            <Ionicons
              name="ios-arrow-back"
              size={24}
              color="#0D1F3C"
              style={{ marginTop: 10 }}
            />
          </TouchableOpacity>
          <Text style={styles.loginTitle}>Check Your Email</Text>
        </View>
        <View>
          <Text style={styles.headerText}>
            Follow a password recovery instructions we have just sent to your
            email address
          </Text>
        </View>
        <Image
          source={require("./../../../assets/images/email.png")}
          style={{
            width: "80%",
            height: 230,
            alignSelf: "center",
            top: 200,
          }}
        />
        <View style={styles.bottomView}>
          <TouchableOpacity
            style={styles.walletBtn}
            onPress={() => this.props.navigation.navigate("newPassword")}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              Back to Login
            </Text>
          </TouchableOpacity>
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
    padding: 12,
    borderRadius: 50,
    // marginTop: "22%",
  },
  header: {
    flexDirection: "row",
    top: 35,
    width: "85%",
    alignSelf: "center",
  },
  headerText: {
    textAlign: "center",
    top: 35,
    width: "80%",
    alignSelf: "center",
    color: "#485068",
  },
  bottomView: {
    width: "100%",
    position: "absolute",
    bottom: 40,
  },
});
