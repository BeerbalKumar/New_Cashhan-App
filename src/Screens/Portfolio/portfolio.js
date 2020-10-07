import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import CustomHeader from './../../Components/CustomHeader/customHeader';

export default class Portfolio extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <CustomHeader color="#F2F2F2" title="Portfolio" iconColor="#0D1F3C" path={this.props.navigation}/>
        <Text style={styles.headerText}>
        Place for managing all your cahhand related day-to-day tasks simple and easy
        </Text>
        <View style={{marginVertical:60}}>
          <Image
            source={require("./../../../assets/images/wondering.png")}
            style={{
              width: "100%",
              height: 200,
              alignSelf: "center",
              marginTop: 150,
            }}
          />
        </View>
        <TouchableOpacity
          style={styles.walletBtn}
          // onPress={() =>
          //   this.setState({ firstScreen: false, secondScreen: true })
          // }
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
            Deposit Coins
          </Text>
        </TouchableOpacity>
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
    marginLeft: "35%",
    marginRight: "30%",
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
    top: 10,
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
