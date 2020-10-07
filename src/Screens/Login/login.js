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
import { Feather } from "@expo/vector-icons";

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      passwordSecurity: true,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.loginTitle}>Welcome Back!</Text>
        <Image
          source={require("./../../../assets/images/wwe.gif")}
          style={{
            width: "80%",
            height: 200,
            alignSelf: "center",
            marginTop: 100,
          }}
        />
        <ScrollView>
          <View
            style={{
              width: "100%",
              backgroundColor: "white",
              borderTopRightRadius: 30,
              borderTopLeftRadius: 30,
            }}
          >
            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                placeholder="Email address"
                placeholderTextColor="#3D4C63"
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                placeholder="Password"
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
            <Text style={styles.forgotLink} onPress={()=>this.props.navigation.navigate("forgatPassword")} >Forgot your Password?</Text>
            <View style={styles.bottomView}>
              <TouchableOpacity
                style={styles.walletBtn}
                onPress={() => this.props.navigation.navigate("verifyPincode")}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 18,
                  }}
                >
                  Login
                </Text>
              </TouchableOpacity>
              <View style={styles.signupView}>
                <Text style={{ color: "#485068" }}>Don't have an account?</Text>
                <TouchableOpacity
                  style={{ marginLeft: "2%" }}
                  onPress={() => this.props.navigation.navigate("signup")}
                >
                  <Text style={{ color: "#347AF0", fontWeight: "700" }}>
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    backgroundColor: "#F2F2F2",
  },
  loginTitle: {
    top: 70,
    fontWeight: "bold",
    fontSize: 20,
    color: "#0D1F3C",
    textAlign: "center",
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
  forgotLink: {
    width: "89%",
    alignSelf: "center",
    textAlign: "right",
    marginTop: 6,
    color: "#347AF0",
  },
  bottomView: {
    marginTop: 110,
  },
  walletBtn: {
    backgroundColor: "#347AF0",
    textAlign: "center",
    width: "70%",
    alignSelf: "center",
    padding: 13,
    borderRadius: 50,
  },
  signupView: {
    flexDirection: "row",
    textAlign: "center",
    alignSelf: "center",
    marginTop: 20,
    paddingBottom: 28,
  },
});
