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
          <Text style={{ textAlign: "center" }}>0.0096CHND ($103.24 USD)</Text>
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
            <TouchableOpacity style={styles.emoji}>
              <MaterialCommunityIcons
                name="emoticon-frown"
                size={24}
                color="orange"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.emoji}>
              <MaterialCommunityIcons
                name="emoticon-devil"
                size={24}
                color="black"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.emoji}>
              <FontAwesome name="gift" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.emoji}>
              <MaterialCommunityIcons
                name="emoticon-frown"
                size={24}
                color="orange"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.emoji}>
              <MaterialCommunityIcons
                name="emoticon-devil"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
          <Textarea
            style={styles.textArea}
            rowSpan={2}
            bordered
            placeholder="Leave Message"
            placeholderTextColor="grey"
          />
          <TouchableOpacity style={styles.walletBtn} onPress={()=>this.props.navigation.navigate("sendFirend")} >
            <Text style={{textAlign:"center",color:"white",fontSize:16}}>Send</Text>
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
    marginTop: 50,
    height:"100%"
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
    width: "70%",
    alignSelf: "center",
    padding: "4%",
    borderRadius: 50,
    marginTop: "22%",
  },
});
