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

export default class WithDraw extends React.Component {
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
      <View style={styles.container}>
        {this.state.firstValue === true ? (
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
                onChangeText={(e) =>
                  this.setState({ value: e, btnState: true })
                }
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
                this.setState({ firstValue: false, secondValue: true })
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
                Next
              </Text>
            </TouchableOpacity>
          </View>
        ) : null}
        {this.state.secondValue === true ? (
          <View style={styles.seconScreen}>
            <Text style={{ textAlign: "center", color: "#485068" }}>
              Paste or scan withdraw address
            </Text>
            <View style={styles.bottomView}>
              <TextInput
                style={styles.input1}
                placeholder="Withdrawal address"
                placeholderTextColor="#3D4C63"
                onChangeText={(e) =>
                  this.setState({ withDrawlValue: e, btnState2: true })
                }
              />
              <TouchableOpacity style={{ marginTop: 20 }}>
                <Text style={{ textAlign: "center", color: "#347AF0" }}>
                  Scan QR Code
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this.setState({
                    firstValue: false,
                    secondValue: false,
                    thirdValue: true,
                  })
                }
                style={
                  this.state.btnState2 === false
                    ? styles.backBtn3
                    : styles.backBtn4
                }
              >
                <Text
                  style={{
                    color: "#B5BBC9",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Withdraw CHND
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
        {this.state.thirdValue === true ? (
          <View style={styles.thirdScreen}>
            <Text style={{ textAlign: "center" }}>
              Confirm your transaction
            </Text>
            <View style={styles.bottomView1}>
              <View
                style={{ borderBottomColor: "#CFD2D8", borderBottomWidth: 1 ,width:"90%",alignSelf:"center",paddingBottom:10}}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "#B5BBC9",
                    marginTop: 20,
                  }}
                >
                  Destination
                </Text>
                <Text
                  style={{
                    width: "60%",
                    textAlign: "center",
                    alignSelf: "center",
                    fontSize: 18,
                    color: "#0D1F3C",
                  }}
                >
                  3M8w2knJKsr3jqMatY iyuraxVvZAmuZ
                </Text>
              </View>
              <View style={{width:"90%",marginTop:20,alignSelf:"center"}}>
                  <Text style={{color:"#B5BBC9"}}>Amount</Text>
                  <Text style={{color:"#0D1F3C",fontSize:16}}>2,4389 Chnd</Text>
              </View>
              <View style={{width:"90%",marginTop:20,alignSelf:"center"}}>
                  <Text style={{color:"#B5BBC9"}}>Amount ($)</Text>
                  <Text style={{color:"#0D1F3C",fontSize:16}}>$16,532.89</Text>
              </View>
              <View style={{width:"90%",marginTop:20,alignSelf:"center"}}>
                  <Text style={{color:"#B5BBC9"}}>Withdraw fee</Text>
                  <Text style={{color:"#0D1F3C",fontSize:16}}>0,0015 CHND</Text>
              </View>
              <View style={{width:"90%",marginTop:20,alignSelf:"center"}}>
                  <Text style={{color:"#B5BBC9"}}>Total amount</Text>
                  <Text style={{color:"#0D1F3C",fontSize:16}}>2,4374 CHND</Text>
              </View>
              <View style={{width:"90%",marginTop:20,alignSelf:"center"}}>
                  <Text style={{color:"#B5BBC9"}}>Total amount ($)</Text>
                  <Text style={{color:"#0D1F3C",fontSize:16}}>$16,518.59</Text>
              </View>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("transactionDetails")
                }
                style={styles.backBtn4}
              >
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Confirm
                </Text>
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
  seconScreen: {
    marginTop: 70,
  },
  input1: {
    borderBottomWidth: 1,
    borderBottomColor: "#CFD2D8",
    width: "90%",
    alignSelf: "center",
    padding: 5,
    marginTop: 20,
    fontSize: 18,
  },
  bottomView: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "white",
    marginTop: 100,
    paddingBottom: 400,
  },
  backBtn3: {
    alignSelf: "center",
    color: "white",
    width: "50%",
    padding: "3%",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#B5BBC9",
    marginTop: 40,
  },
  backBtn4: {
    alignSelf: "center",
    backgroundColor: "#347AF0",
    color: "white",
    width: "50%",
    padding: "3%",
    borderRadius: 50,
    marginTop: 40,
  },
  thirdScreen: {
    marginTop: 70,
  },
  bottomView1: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "white",
    marginTop: 100,
    paddingBottom: 90,
  },
});
