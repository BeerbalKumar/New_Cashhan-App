import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Right, Switch } from "native-base";

export default class Security extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image
            source={require("./../../../assets/images/YOY.png")}
            style={styles._image}
          />
        </View>
        <View style={styles._box}>
          <View style={styles._Touch1}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("changePassword")}>
              <Text style={{ fontWeight: "bold", color: "#0D1F3C" }}>
                Change Password
              </Text>
            </TouchableOpacity>
            <AntDesign name="arrowright" size={17} color="black" />
          </View>

          <View style={styles._Touch1}>
            <TouchableOpacity>
              <Text style={{ fontWeight: "bold", color: "#0D1F3C" }}>
                Change PIN
              </Text>
            </TouchableOpacity>
            <AntDesign name="arrowright" size={17} color="black" />
          </View>

          <TouchableOpacity style={styles._Touch1} onPress={()=>this.props.navigation.navigate("twoFactorVerification")}>
            <TouchableOpacity>
              <Text style={{ fontWeight: "bold", color: "#0D1F3C" }}>
                Two-Factor Verification
              </Text>
            </TouchableOpacity>

            <Right>
              <Switch value={false} />
            </Right>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#edf1f9",
  },

  _image: {
    width: "75%",
    alignSelf: "center",
    height: 230,
    marginTop: 100,
  },
  _box: {
    width: "100%",
    alignSelf: "center",
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: "57%",
  },
  _Touch1: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    backgroundColor: "#EDF1F9",
    padding: 20,
    borderRadius: 27,
    marginHorizontal: 10,
  },
});
