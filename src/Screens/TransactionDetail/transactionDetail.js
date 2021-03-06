import React from "react";
import { View, Text, StyleSheet, TouchableOpacity,ScrollView } from "react-native";
import {
  Feather,
  AntDesign,
  Ionicons,
  EvilIcons,
  MaterialCommunityIcons,
  Zocial,
  FontAwesome5,
} from "@expo/vector-icons";

export default class TransactionDetails extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.transactionDetailView}>
          <TouchableOpacity style={styles.detailIcon}>
            <EvilIcons
              name="arrow-left"
              size={50}
              color="white"
              style={{ fontWeight: "700" }}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Withdrawn</Text>
          <ScrollView>
          <View style={{paddingVertical:50}}>
          <View style={styles.TimeView}>
            <Text style={{ color: "#B5BBC9" }}>Date</Text>
            <Text style={{ color: "#B5BBC9", marginRight: "25%" }}>Time</Text>
          </View>
          <View style={styles.TimeView1}>
            <Text style={{ color: "#0D1F3C" }}>Aug 19, 2020</Text>
            <Text style={{ color: "#0D1F3C", marginRight: "15%" }}>
              11:38 AM
            </Text>
          </View>
          <View style={styles.amountView}>
            <Text style={{ color: "#B5BBC9", marginTop: 20 }}>
              Total amount
            </Text>
            <Text style={{ color: "#0D1F3C", fontSize: 16 }}>0.021 CHND</Text>
            <Text style={{ color: "#B5BBC9", marginTop: 20 }}>
              Total amount ($)
            </Text>
            <Text style={{ color: "#0D1F3C", fontSize: 16 }}>$204.48</Text>
            <Text style={{ color: "#B5BBC9", marginTop: 20 }}>
              Withdraw fee
            </Text>
            <Text style={{ color: "#0D1F3C", fontSize: 16 }}>0,0015 CHND</Text>
            <Text style={{ color: "#B5BBC9", marginTop: 20 }}>Status</Text>
            <Text style={{ color: "#347AF0", fontSize: 16 }}>
              Transaction confirmed
            </Text>
          </View>
          <View style={styles.idView}>
            <Text style={{ color: "#B5BBC9", marginTop: 20 }}>
              Transaction ID
            </Text>
            <Text style={{ color: "#0D1F3C", fontSize: 14 }}>
              3M8w2knJKsr3jqMatYiyuraxVvZA
            </Text>
            <Text style={{ color: "#B5BBC9", marginTop: 20 }}>From</Text>
            <Text style={{ color: "#0D1F3C", fontSize: 14 }}>
              0x0b06d4JH48e5DK3jm4a3af69BnVO 51c12i8
            </Text>
            <Text style={{ color: "#B5BBC9", marginTop: 20 }}>To</Text>
            <Text style={{ color: "#0D1F3C", fontSize: 14 }}>
              3M8w2knJKsr3jqM3aatYiyuraxVvZAm uZy24lK8
            </Text>
          </View>
          <TouchableOpacity style={styles.backBtn}>
            <Text style={{color:"white",textAlign:"center",fontWeight:"bold"}}>Back to Wallet</Text>
          </TouchableOpacity>
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
  transactionDetailView: {
    marginTop: 110,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "white",
    paddingBottom:22
  },
  detailIcon: {
    alignSelf: "center",
    backgroundColor: "#DF5060",
    borderRadius: 50,
    padding: "3%",
    width: "20%",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -30,
  },
  headerText: {
    textAlign: "center",
    color: "#DF5060",
    fontWeight: "bold",
    fontSize: 18,
  },
  TimeView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    alignSelf: "center",
  },
  TimeView1: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    alignSelf: "center",
    borderBottomWidth: 1,
    paddingBottom: 20,
    borderBottomColor: "#CFD2D8",
  },
  amountView: {
    width: "80%",
    alignSelf: "center",
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderBottomColor: "#CFD2D8",
  },
  idView: {
    width: "80%",
    alignSelf: "center",
    // borderBottomWidth: 1,
    // paddingBottom: 10,
    // borderBottomColor: "#CFD2D8",
  },
  backBtn:{
      alignSelf:"center",
      backgroundColor:"#347AF0",
      color:"white",
      width:"70%",
      padding:12,
      borderRadius:50,
      marginTop:20
  }
});
