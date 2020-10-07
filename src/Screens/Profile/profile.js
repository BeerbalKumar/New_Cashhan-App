import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
export default class ProfileScreen extends React.Component{
render(){
  return (
    <View style={styles.container}>
      <View>
        <ScrollView>
          <View style={styles._View1}>
            <View style={styles._View2}>
              <Image
                source={require("./../../../assets/images/profile.png")}
                style={{
                  width: "30%",
                  height: 108,
                  alignSelf: "center",
                  marginTop: 60,
                }}
              />
              <Text style={styles._Text1}>Mettie Hardwick</Text>
              <View style={styles._Touch1}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("personalInformation")}>
                  <Text>Personal information</Text>
                </TouchableOpacity>
                <AntDesign name="arrowright" size={17} color="black" />
              </View>
              <View style={styles._Touch1}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("verifyNumberScreen")}>
                  <Text>Phone number verification</Text>
                </TouchableOpacity>
                <AntDesign name="arrowright" size={17} color="black" />
              </View>
              <Text style={styles._Text2}>setting</Text>

              <View style={styles._Touch1}>
                <TouchableOpacity>
                  <Text>Default Curency</Text>
                </TouchableOpacity>
                <Text style={styles._Textde}>Dollar (USD)</Text>
                <AntDesign name="arrowright" size={17} color="black" />
              </View>
              <View style={styles._Touch1}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("security")}>
                  <Text>Security</Text>
                </TouchableOpacity>
                <AntDesign name="arrowright" size={17} color="black" />
              </View>
              <View style={styles._Touch1}>
                <TouchableOpacity>
                  <Text>Help & Support</Text>
                </TouchableOpacity>
                <AntDesign name="arrowright" size={17} color="black" />
              </View>
              <View style={styles._Touch1}>
                <TouchableOpacity>
                  <Text>Legaly</Text>
                </TouchableOpacity>
                <AntDesign name="arrowright" size={17} color="black" />
              </View>
            </View>
          </View>
        </ScrollView>
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
  _View1: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "white",
    marginTop: 150,
    height: "200%",
    // "120%"
  },
  _View2: {
    marginTop: -100,
  },
  _Text1: {
    alignSelf: "center",
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 12,
  },
  _Touch1: {
    // flex:1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    backgroundColor: "#EDF1F9",
    padding: 20,
    // alignItems: "center",
    borderRadius: 27    ,
    marginHorizontal: 10,
  },
  _Text2: {
    marginLeft: 12,
    marginBottom: -12,
    marginTop: 14,
    fontSize: 17,
    fontWeight: "bold",
  },
  _Textde:{
color:"#0D1F3C",
marginLeft:"37%"
}
});