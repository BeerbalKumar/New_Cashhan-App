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
import { Feather, AntDesign, Ionicons, Zocial } from "@expo/vector-icons";

export default class WalletCard extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.walletCadView}>
          {this.props.icon}
          <View style={styles.cashhandView}>
            <Text style={{ fontWeight: "bold" }}>Cashhand (chnd)</Text>
            <Text>0.8936 Chnd</Text>
          </View>
          <View style={styles.cahhandPrice}>
            <Text style={{ fontWeight: "bold" }}>$ 8,452.98</Text>
            <Text style={{ color: "#75BF72" }}>+5.24%</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#F2F2F2",
  },
  walletCadView: {
    flexDirection: "row",
    width: "90%",
    backgroundColor: "#EDF1F9",
    padding: "4%",
    alignSelf: "center",
    borderRadius: 50,
    elevation: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  cashhandText: {},
  cashhandView: {
    marginLeft: "4%",
    width: "60%",
  },
  cahhandPrice: {
    alignSelf: "flex-end",
  },
});
