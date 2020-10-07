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

export default class NewPassword extends React.Component {
  constructor() {
    super();
    this.state = {
      passwordSecurity: true,
      repeatPassword:true
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("chekEmail")}
          >
            <Ionicons
              name="ios-arrow-back"
              size={24}
              color="#0D1F3C"
              style={{ marginTop: 10 }}
            />
          </TouchableOpacity>
          <Text style={styles.loginTitle}>Create New Password</Text>
        </View>
        <View>
          <Text style={styles.headerText}>
            Your new password must be different from a previously used password
          </Text>
        </View>
        <ScrollView>
          <View style={styles.bottomView}>
            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                placeholder="New Password"
                placeholderTextColor="#3D4C63"
                secureTextEntry={this.state.passwordSecurity}
              />
              {this.state.passwordSecurity === true ? (
                <Feather
                  name="eye"
                  size={24}
                  color="black"
                  onPress={() => this.setState({ passwordSecurity: false })}
                  style={{marginTop:10}}
                />
              ) : (
                <Feather
                  name="eye-off"
                  size={24}
                  color="black"
                  onPress={() => this.setState({ passwordSecurity: true })}
                  style={{marginTop:10}}
                />
              )}
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                placeholder="Repeat Password"
                placeholderTextColor="#3D4C63"
                secureTextEntry={this.state.repeatPassword}
              />
              {this.state.repeatPassword === true ? (
                <Feather
                  name="eye"
                  size={24}
                  color="black"
                  onPress={() => this.setState({ repeatPassword: false })}
                  style={{marginTop:10}}
                />
              ) : (
                <Feather
                  name="eye-off"
                  size={24}
                  color="black"
                  onPress={() => this.setState({ repeatPassword: true })}
                  style={{marginTop:10}}
                />
              )}
            </View>
            <TouchableOpacity
              style={styles.walletBtn}
              onPress={() => this.props.navigation.navigate("login")}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                Submit
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
    marginLeft: "15%",
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
    marginTop: "22%",
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
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: "74%",
    paddingBottom: 200,
  },
});
