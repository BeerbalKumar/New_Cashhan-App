import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
export default class WellDone extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles._View1}>
            <Text style={styles._Text1}>
              Your profile is now being reviewed. You can expect it to finish in
              the next 24 hours
            </Text>
          </View>
          <View>
            <Image
              source={require("./../../../assets/images/success.png")}
              style={{
                width: "80%",
                height: 240,
                alignSelf: "center",
                marginTop: 130,
              }}
            />
          </View>
            <TouchableOpacity style={styles._View3} onPress={()=>this.props.navigation.navigate("profileScreen")}>
              <Text style={styles._Text2}>Back to Profile</Text>
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
  _View1: {
    alignSelf: "center",
    marginTop: 80,
    marginHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  _Text1: {
    color: "#485068",
    textAlign: "center",
    fontSize: 14,
  },
  _View3: {
    alignSelf: "center",
    // marginTop: "13%",
    // marginHorizontal: 30,
    // marginTop:"43%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"#347AF0",
    padding:13,
    borderRadius:30,
    width:"70%",
          position:"absolute",
      bottom:20
    
  },
  _Text2:{
      fontWeight:"bold",
      fontSize:16,
      color:"#fff",

  }
});