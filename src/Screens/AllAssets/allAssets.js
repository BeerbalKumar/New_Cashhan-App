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
import WalletCard from "./../../Components/WalletCard/walletcard";

export default class AllAssets extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.secView}>
            <View style={styles.thirdSec}>
              <Text>Coins</Text>
              <Text>Amount</Text>
            </View>
            <WalletCard
              icon={<Zocial name="bitcoin" size={24} color="#347AF0" />}
            />
            <WalletCard
              icon={<FontAwesome5 name="ethereum" size={24} color="#347AF0" />}
            />
            <WalletCard
              icon={
                <MaterialCommunityIcons
                  name="litecoin"
                  size={24}
                  color="#347AF0"
                />
              }
            />
            <WalletCard
              icon={<Zocial name="bitcoin" size={24} color="#347AF0" />}
            />
            <WalletCard
              icon={<FontAwesome5 name="ethereum" size={24} color="#347AF0" />}
            />
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
  secView: {
    backgroundColor: "white",
    borderTopEndRadius: 50,
    borderTopLeftRadius: 50,
    marginTop: 100,
    paddingBottom: 233,
  },
  thirdSec: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "78%",
    alignSelf: "center",
    marginTop: 20,
  },
});
