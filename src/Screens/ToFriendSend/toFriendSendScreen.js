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

export default class ToFriendSendScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "0.00",
      btnState: false,
      btnState2: false,
      firstValue: true,
      secondValue: false,
      thirdValue: false,
    };
  }
  render() {
    return (
      <View>
        <View>
          <View style={styles.withDrawView}>
            <ScrollView horizontal={true}>
              <TouchableOpacity style={styles.withDrawText}>
                <Foundation name="bitcoin-circle" size={24} color="#347AF0" />
                <Text>Cashhand</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.withDrawText}>
                <Foundation name="bitcoin-circle" size={24} color="#347AF0" />
                <Text>Cashhand</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.withDrawText}>
                <Foundation name="bitcoin-circle" size={24} color="#347AF0" />
                <Text>Cashhand</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.withDrawText}>
                <Foundation name="bitcoin-circle" size={24} color="#347AF0" />
                <Text>Cashhand</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
          <Text style={{ textAlign: "center", color: "#485068" }}>
            47845 Chnd Available
          </Text>
          <View
            style={{
              marginTop: 100,
              flexDirection: "row",
              marginLeft: "33%",
            }}
          >
            <TextInput
              style={styles.input}
              placeholder="0.00"
              keyboardType={"numeric"}
              onChangeText={(e) => this.setState({ value: e, btnState: true })}
            />
            <Feather
              name="refresh-ccw"
              size={24}
              color="#347AF0"
              style={{ marginTop: 10, marginLeft: "10%" }}
            />
          </View>
          <Text style={{ textAlign: "center", color: "grey", fontSize: 19 }}>
            {this.state.value}
          </Text>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("chooseRecipient")
            }
            style={
              this.state.btnState === false ? styles.backBtn : styles.backBtn2
            }
          >
            <Text
              style={{
                color: "#B5BBC9",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Choose recipient
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
  withDrawView: {
    marginTop: 80,
    flexDirection: "row",
    height: 40,
    flexWrap: "nowrap",
    width: "100%",
  },
  withDrawText: {
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    marginHorizontal: 5,
    justifyContent: "space-evenly",
  },
  input: {
    alignSelf: "center",
    width: "50%",
    textAlign: "center",
    fontSize: 30,
    color: "#347AF0",
  },
  backBtn: {
    alignSelf: "center",
    color: "white",
    width: "50%",
    padding: "3%",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#B5BBC9",
    marginTop: 40,
  },
  backBtn2: {
    alignSelf: "center",
    backgroundColor: "#347AF0",
    color: "white",
    width: "50%",
    padding: "3%",
    borderRadius: 50,
    marginTop: 40,
  },
});
