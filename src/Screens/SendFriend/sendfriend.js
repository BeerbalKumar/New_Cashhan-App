import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Textarea, Form } from "native-base";
import {
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";

export default class AddMessage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ marginTop: 70 }}>
          <Text style={{ textAlign: "center" }}>Confirm your transaction</Text>
        </View>
        <View style={styles.bottomView}>
          <View style={styles.profileView}>
            <Image
              source={require("./../../../assets/images/profile.png")}
              style={{
                width: "25%",
                height: 45,
                alignSelf: "center",
              }}
            />
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
                alignSelf: "center",
                marginLeft: "7%",
              }}
            >
              Alex McCaddy
            </Text>
          </View>
          <View style={styles.emojiView}>
            <TouchableOpacity style={styles.emoji}>
              <AntDesign name="heart" size={24} color="red" />
            </TouchableOpacity>
            {/*  */}
          </View>
          <View style={styles._view2}>
            <Text style={styles._text}>
              Hey Alex, thank you for getting that order for me from Amazon!
            </Text>
          </View>
          <View style={styles._view3}>
            <Text style={styles._text1}>Amount</Text>
            <Text style={styles._text2}>0.00965 CHND</Text>
            <Text style={styles._text1}>Amount (&)</Text>
            <Text style={styles._text2}>$103.24</Text>
          </View>
          <TouchableOpacity style={styles.walletBtn} onPress={()=>this.props.navigation.navigate("sendtransactionDetails")}>
            <Text style={{ textAlign: "center", color: "white", fontSize: 16 }}>
              Confirm
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
  profileView: {
    width: "50%",
    alignSelf: "center",
    flexDirection: "row",
    marginTop: 20,
  },
  bottomView: {
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: 200,
    height: "63%",
  },
  emojiView: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  emoji: {
    backgroundColor: "white",
    elevation: 4,
    padding: 10,
    borderRadius: 50,
    margin: 7,
  },
  textArea: {
    width: "90%",
    alignSelf: "center",
    borderBottomWidth: 1,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    marginTop: 30,
  },
  walletBtn: {
    backgroundColor: "#347AF0",
    textAlign: "center",
    width: "60%",
    alignSelf: "center",
    padding: "4%",
    borderRadius: 50,
    position: "absolute",
    bottom: 20,
  },
  _text: {
    alignSelf: "center",
    textAlign: "center",
    marginHorizontal: "13%",
    paddingBottom: 10,
  },
  _view2: {
    alignSelf: "center",
    textAlign: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#CFD2D8",
    paddingBottom: 8,
    width: "90%",
  },
  _view3: {
    textAlign: "center",
    width: "90%",
    // marginTop:20
  },
  _text1: {
    marginHorizontal: "6%",
    color:'#B5BBC9',
    fontSize: 14,
    marginTop:20
  },
  _text2: {
    marginHorizontal: "6%",
    color:'#0D1F3C',
    fontSize: 18,
    fontWeight: "bold",
  },
});
