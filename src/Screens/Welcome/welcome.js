import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default class Welcome extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("./../../../assets/images/Cashhand.png")}
          style={{
            width: "50%",
            height: 180,
            alignSelf: "center",
            marginTop: 150,
          }}
        />
        <Text style={styles.text1}>Welcome to</Text>
        <Text style={styles.text2}>CASHHAND WALLET</Text>
        <View style={styles.bottomView}>
          <TouchableOpacity style={styles.walletBtn} onPress={()=>this.props.navigation.navigate("login")}>
            <Text
              style={{
                textAlign: "center",
                color: "#347AF0",
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              Create a New Wallet
            </Text>
          </TouchableOpacity>
          <View style={styles.signupView}>
            <Text style={{color:"white"}}>Don't have an account?</Text>
            <TouchableOpacity style={{marginLeft:"2%"}} onPress={()=>this.props.navigation.navigate("signup")}>
              <Text style={{color:"white",fontWeight:"700"}}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#347AF0",
  },
  text1: {
    textAlign: "center",
    color: "rgba(255, 255, 255, 0.5043)",
    fontSize: 20,
    marginTop: 40,
  },
  text2: {
    textAlign: "center",
    color: "rgba(255, 255, 255, 0.5043)",
    marginTop: 10,
    fontSize: 20,
  },
  bottomView: {
    top: 180,
  },
  walletBtn: {
    backgroundColor: "white",
    textAlign: "center",
    width: "70%",
    alignSelf: "center",
    padding: 12,
    borderRadius: 50,
  },
  signupView:{
      flexDirection:"row",
      textAlign:"center",
      alignSelf:"center",
      top:10
  }
});
