import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { Foundation, Feather } from "@expo/vector-icons";
import { Header, Content, Form, Item, Picker } from "native-base";
import CodePin from "react-native-pin-code";

export default class VerifyNumberScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "0.00",
      btnState: false,
      firstScreen: true,
      secondScreen: false,
      selected2: undefined,
    };
  }

  onValueChange2 = (value) => {
    this.setState({
      selected2: value,
    });
  };
  render() {
    console.log(this.state.selected2);
    return (
      <View style={styles.container}>
        {this.state.firstScreen === true ? (
          <View>
            <View style={styles.headerView}>
              <Text style={styles.headerText}>
                Please enter your country and your phone number to receive a
                verification code
              </Text>
            </View>
            <View style={styles.bottomView}>
              <Item
                picker
                style={{
                  backgroundColor: "#EDF1F9",
                  width: "90%",
                  alignSelf: "center",
                  borderRadius: 50,
                  color: "white",
                  marginTop: 20,
                }}
              >
                <Picker
                  mode="dropdown"
                  // iosIcon={<Icon name="arrow-down" />}
                  style={{ width: 100 }}
                  placeholder="Select your SIM"
                  placeholderStyle={{ color: "#bfc6ea" }}
                  placeholderIconColor="#007aff"
                  selectedValue={this.state.selected2}
                  onValueChange={this.onValueChange2.bind(this)}
                >
                  <Picker.Item
                    label="United States                                +1"
                    value="+1"
                  />
                  <Picker.Item
                    label="United States                                +92"
                    value="+92"
                  />
                  <Picker.Item
                    label="United States                                +91"
                    value="+91"
                  />
                  <Picker.Item
                    label="United States                                +93"
                    value="+93"
                  />
                  <Picker.Item
                    label="United States                                +94"
                    value="+94"
                  />
                </Picker>
              </Item>
              <View style={{ marginTop: 20 }}>
                <TextInput
                  placeholder="Phone Number"
                  placeholderTextColor="#EDF1F9"
                  style={styles.input}
                  onChangeText={(e) =>
                    this.setState({ selected2: e, btnState: true })
                  }
                  value={this.state.selected2}
                />
              </View>

              <TouchableOpacity
                onPress={() =>
                  this.setState({ firstScreen: false, secondScreen: true })
                }
                style={
                  this.state.btnState === false
                    ? styles.backBtn
                    : styles.backBtn2
                }
              >
                <Text
                  style={{
                    color: "#B5BBC9",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
        {this.state.secondScreen === true ? (
          <View style={{height:"100%"}}>
            <CodePin
              number={4} // You must pass number prop, it will be used to display 4 (here) inputs
              checkPinCode={(code, callback) => callback(code === "1234")}
              // // Check manually code (ask server for instance)
              // // and call callback function with
              // //    true  (code pin is correct)
              // // or false (code pin is false)
              success={() => console.log("hurray!")} // If user fill '2018', success is called
              text="Please enter the 4-digit number we have sent to your phone"
              autoFocusFirst={false} // disabling auto-focus
              style={styles.containerPinStyle}
              containerStyle={{backgroundColor:"#F2F2F2",alignSelf:"center",marginTop:70}}
              textStyle={{color:"black",fontSize:14}}
            />
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("weldone")
                }
                style={styles.backBtn2}
              >
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Verify
                </Text>
              </TouchableOpacity>
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
  headerView: {
    marginTop: 100,
  },
  headerText: {
    textAlign: "center",
    color: "#485068",
  },
  bottomView: {
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: "79%",
    marginTop: 30,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#CFD2D8",
    width: "90%",
    alignSelf: "center",
    padding: 7,
    fontSize: 18,
  },
  backBtn: {
    alignSelf: "center",
    color: "white",
    width: "70%",
    padding: 13,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#B5BBC9",
    position: "absolute",
    bottom: 50,
  },
  backBtn2: {
    alignSelf: "center",
    backgroundColor: "#347AF0",
    color: "white",
    width: "70%",
    padding: 13,
    borderRadius: 50,
    position: "absolute",
    bottom: 50,
  },
  containerPinStyle: {
    width: 60,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: "center",
    textAlign: "center",
    color: "#347AF0",
    fontSize: 20,
    backgroundColor:"white",
    borderColor:"white",
    marginTop:300
  },
  // containerPinStyle:{
  //   backgroundColor : 'grey'
  // }
});
