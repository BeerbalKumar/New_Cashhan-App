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
export default class PersonalInformation extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <ScrollView>
        <View style={styles._View1}>
          <Text style={styles._Text1}>
            We get your personal information from the verification process. If
            you want to make changes on your personal information, contact our
            support.
          </Text>
        </View>
        <View style={styles._View2}>
          <TextInput style={styles._TextInput}
            style={{ height: 40, borderBottomColor: "gray", borderBottomWidth: 1,marginTop:"9%",
            width:"85%",alignSelf:"center"
        }}
            placeholder="Enter name"
          />
           <TextInput style={styles._TextInput}
            style={{ height: 40, borderBottomColor: "gray", borderBottomWidth: 1,marginTop:"9%",
            width:"85%",alignSelf:"center"
        }}
            placeholder="Last name"
          />
           <TextInput style={styles._TextInput}
            style={{ height: 40, borderBottomColor: "gray", borderBottomWidth: 1,marginTop:"9%",
            width:"85%",alignSelf:"center"
         }}
            placeholder="Street address"
          />
           <TextInput style={styles._TextInput}
            style={{ height: 40, borderBottomColor: "gray", borderBottomWidth: 1,marginTop:"9%",
            width:"85%",alignSelf:"center"
        }}
            placeholder="city"
          />
           <TextInput style={styles._TextInput}
            style={{ height: 40, borderBottomColor: "gray", borderBottomWidth: 1,marginTop:"9%",
            width:"85%",alignSelf:"center"
        }}
            placeholder="ZIP/Area code"
          />
           <TextInput style={styles._TextInput}
            style={{ height: 40, borderBottomColor: "gray", borderBottomWidth: 1,marginTop:"9%",
            width:"85%",alignSelf:"center" 
        }}
            placeholder="Citizenship"
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
  _View1: {
    alignSelf: "center",
    marginTop: 80,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  _Text1: {
    color: "#485068",
    textAlign: "center",
    fontSize: 14,
  },
  _View2: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "white",
    marginTop: 40,
    // height: 700,
    // height:"100%",
    paddingBottom:160
    
  },
  _TextInput:{
    
  },


  });