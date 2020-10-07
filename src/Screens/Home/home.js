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
export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      firstScreen: true,
      secondScreen: false,
      thirdScreen: false,
    };
  }
  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        {this.state.firstScreen === true ? (
          <View style={styles.container}>
            <View style={styles.header}>
              <TouchableOpacity
                style={{ width: "100%" }}
                onPress={() => this.props.navigation.toggleDrawer()}
              >
                <Image
                  source={require("./../../../assets/images/right-menu-bars.png")}
                  style={{
                    width: "100%",
                    height: 21,
                    alignSelf: "center",
                    marginTop: 10,
                  }}
                  onPress={() => alert("nbnbn")}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.headerText}>
              To be able to deposit assets to your wallet, please Create a new
              wallet
            </Text>
            <View>
              <Image
                source={require("./../../../assets/images/scan.png")}
                style={{
                  width: "80%",
                  height: 300,
                  alignSelf: "center",
                  marginTop: 150,
                }}
              />
            </View>
            <TouchableOpacity
              style={styles.walletBtn}
              onPress={() =>
                this.props.navigation.navigate("wallet")
              }
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 18,
                  alignSelf: "center",
                  width: "100%",
                }}
              >
                Create a New Wallet
              </Text>
            </TouchableOpacity>
          </View>
        ) : null}

        {this.state.secondScreen === true ? (
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.loginTitle}>Welcome for Cashhand</Text>
              <Image
                source={require("./../../../assets/images/right-menu-bars.png")}
                style={{
                  width: "7%",
                  height: 21,
                  alignSelf: "center",
                  marginTop: 10,
                }}
              />
            </View>
            <Text style={styles.headerText}>
              Your Profile Verification is now in progress. If you don't receive
              a confirmation in the next 24 hours, please contact our support.
            </Text>
            <View>
              <Image
                source={require("./../../../assets/images/privacy.png")}
                style={{
                  width: "80%",
                  height: 300,
                  alignSelf: "center",
                  marginTop: 150,
                }}
              />
            </View>
            <TouchableOpacity
              style={styles.walletBtn2}
              onPress={() =>
                this.setState({
                  firstScreen: false,
                  secondScreen: false,
                  thirdScreen: true,
                })
              }
            >
              <AntDesign name="clockcircle" size={24} color="#FDB32A" />
              <Text
                style={{
                  textAlign: "center",
                  color: "#3D4C63",
                  fontWeight: "bold",
                  fontSize: 18,
                  alignSelf: "center",
                  width: "90%",
                }}
              >
                Verification in progress
              </Text>
            </TouchableOpacity>
          </View>
        ) : null}

        {this.state.thirdScreen === true ? (
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.loginTitle2}>Cashhand</Text>
              <Image
                source={require("./../../../assets/images/right-menu-bars.png")}
                style={{
                  width: "7%",
                  height: 21,
                  alignSelf: "center",
                  marginTop: 10,
                  marginLeft: "29%",
                }}
              />
            </View>
            <Text style={styles.headerText}>
              This is a place where you can find your deposited assets. Let's go
              through your first deposit!
            </Text>
            <View>
              <Image
                source={require("./../../../assets/images/grow.png")}
                style={{
                  width: "80%",
                  height: 300,
                  alignSelf: "center",
                  marginTop: 150,
                }}
              />
            </View>
            <TouchableOpacity
              style={styles.walletBtn}
              // onPress={() => this.props.navigation.navigate("chekEmail")}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 18,
                  alignSelf: "center",
                  width: "100%",
                }}
              >
                Deposit coins
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
  loginTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#0D1F3C",
    textAlign: "center",
    alignSelf: "center",
    marginLeft: "15%",
    marginRight: "10%",
  },
  loginTitle2: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#0D1F3C",
    textAlign: "center",
    alignSelf: "center",
    marginLeft: "35%",
    // marginRight: "0%",
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
    padding: "5%",
    borderRadius: 50,
    bottom: 50,
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    top: 50,
    width: "85%",
    alignSelf: "center",
  },
  headerText: {
    textAlign: "center",
    top: 50,
    width: "80%",
    alignSelf: "center",
    color: "#485068",
  },
  bottomView: {
    width: "100%",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: "5%",
  },
  walletBtn2: {
    backgroundColor: "#F2F2F2",
    textAlign: "center",
    width: "70%",
    alignSelf: "center",
    padding: "5%",
    borderRadius: 50,
    bottom: 50,
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
  },
});
