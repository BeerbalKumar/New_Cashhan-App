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
export default class ChangePassword extends React.Component {
  constructor() {
    super();
    this.state = {
      passwordSecurity: true,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles._View1}>
            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                placeholder="Current Password"
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
            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                placeholder="Repeat Password"
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
            <View>
            <TouchableOpacity style={styles._View3}>
              <Text style={styles._Text2}>Change Password</Text>
            </TouchableOpacity>
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
    backgroundColor: "#F2F2F2",
  },
  _View1: {
    marginTop: "23%",
    backgroundColor: "#fff",
    height: 700,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
  _View3: {
    alignSelf: "center",
    marginTop: "13%",
    // marginHorizontal: 30,
    marginTop:"15%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"#347AF0",
    padding:13,
    borderRadius:30,
    width:"70%"
    
  },
  _Text2:{
      fontWeight:"bold",
      fontSize:18,
      color:"#fff",
  }

  
});