import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import {
  MaterialCommunityIcons,
  AntDesign,
  Feather,
  Ionicons,
  Entypo,
  SimpleLineIcons,
} from "@expo/vector-icons";

export default class CustomHeader extends React.Component {
  render() {
    return (
      <View
        style={[
          {
            flexDirection: "row",
            justifyContent: "space-between",
            width: "85%",
            alignSelf: "center",
            marginTop: 40,
          },
          { backgroundColor: this.props.color },
        ]}
      >
        <Ionicons
          name="ios-arrow-back"
          size={24}
          color={this.props.iconColor}
        />
        <Text
          style={[
            { fontSize: 18, fontWeight: "bold" },
            { color: this.props.iconColor },
          ]}
        >
          {this.props.title}
        </Text>
        <Entypo name="menu" size={24} color={this.props.iconColor} onPress={()=>this.props.path.toggleDrawer()}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
