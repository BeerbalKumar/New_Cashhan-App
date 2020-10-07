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
import {
  Feather,
  AntDesign,
  Ionicons,
  EvilIcons,
  MaterialCommunityIcons,
  Zocial,
  FontAwesome5,
} from "@expo/vector-icons";

export default class TransactionCard extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
console.log(this.props.value)
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() =>this.props.value==="allTransaction"?this.props.path(true):this.props.path.navigate("transactionDetails")}
        >
          <View style={styles.walletCadView}>
            <EvilIcons name="arrow-down" size={24} color={this.props.color} />
            <View style={styles.cashhandView}>
              <Text style={{ fontWeight: "bold" }}>$ 204</Text>
              <Text style={{ color: "#485068" }}>0.021 CHND</Text>
            </View>
            <View style={styles.cahhandPrice}>
              <TouchableOpacity >
                <Text style={{ fontWeight: "bold", color: "#DF5060" }}>
                  Withdrawn
                </Text>
              </TouchableOpacity>
              <Text style={{ color: "#485068" }}>Aug 16, 2019</Text>
            </View>
          </View>
        </TouchableOpacity>
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
