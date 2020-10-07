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
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import WalletCard from "./../../Components/WalletCard/walletcard";
import TransactionCard from "./../../Components/TranscationCard/transactionCard";
import RBSheet from "react-native-raw-bottom-sheet";
import CustomHeader from './../../Components/CustomHeader/customHeader';


export default class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      firstScreen: true,
      secondScreen: false,
      thirdScreen: false,
    };
  }
  render() {
    console.log(this.props.navigation)
    return (
      <View style={styles.container}>
        <CustomHeader color="#347AF0" title="Cashhand" iconColor="white" path={this.props.navigation}/>
        <View
          style={{ backgroundColor: "#347AF0", paddingBottom: 30, zIndex: 1 }}
        >
          <Text style={styles.balance}>$24,825.90</Text>
          <Text style={styles.text}>Wallet Balance</Text>
          <LineChart
            data={{
              labels: ["Day", "Week", "Months", "year", "all"],
              datasets: [
                {
                  data: [0, 1, 0, 2, 3, 2],
                },
              ],
            }}
            width={Dimensions.get("window").width} // from react-native
            height={220}
            // yAxisLabel="$"
            // yAxisSuffix="k"
            yAxisInterval={1}
            chartConfig={{
              backgroundColor: "#347AF0",
              backgroundGradientFrom: "#347AF0",
              backgroundGradientTo: "#347AF0",
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "3",
                strokeWidth: "1",
                stroke: "#347AF0",
              },
            }}
            bezier
            style={{
              // marginVertical: 8,
              // borderRadius: 16,
              marginTop: 20,
            }}
          />
        </View>
        <View style={styles.secView}>
          <ScrollView>
            <View>
              <Text
                style={{ marginLeft: "4%", marginTop: 20, fontWeight: "bold" }}
              >
                Assets
              </Text>
              <WalletCard
                icon={<Zocial name="bitcoin" size={24} color="#347AF0" />}
              />
              <WalletCard
                icon={
                  <FontAwesome5 name="ethereum" size={24} color="#347AF0" />
                }
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
              <TouchableOpacity
                style={styles.depositBtn}
                onPress={() => this.RBSheet.open()}
              >
                <Text style={{ color: "#EDF1F9", textAlign: "center" }}>
                  + Deposit more coins
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("allAssets")}
              >
                <Text
                  style={{
                    marginTop: 10,
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "#347AF0",
                  }}
                >
                  See All Assets
                </Text>
              </TouchableOpacity>
              <Text
                style={{ marginLeft: "4%", marginTop: 20, fontWeight: "bold" }}
              >
                Latest transactions
              </Text>
              <TransactionCard iconName="arrow-up" color="#DF5060" path={this.props.navigation} value="wallet"/>
              <TransactionCard iconName="arrow-down" color="#75BF72" path={this.props.navigation}  value="wallet"/>
              <TransactionCard iconName="arrow-right" color="#347AF0" path={this.props.navigation}  value="wallet"/>
              <TransactionCard iconName="arrow-left" color="#DF5060" path={this.props.navigation}  value="wallet"/>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate("allTransaction")}>
                <Text
                  style={{
                    marginTop: 10,
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "#347AF0",
                    paddingBottom:30
                  }}
                >
                  See All Transactions
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        <RBSheet
          ref={(ref) => {
            this.RBSheet = ref;
          }}
          height={370}
          openDuration={250}
          customStyles={{
            container: {
              // justifyContent: "center",
              alignItems: "center",
              borderTopEndRadius: 20,
              borderTopLeftRadius: 20,
            },
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <View style={styles.headerView}>
                <TouchableOpacity style={styles.iconSec}>
                  <AntDesign name="pluscircleo" size={24} color="#0D1F3C" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconSec}>
                  <EvilIcons
                    name="arrow-left"
                    size={30}
                    color="#0D1F3C"
                    style={{ fontWeight: "700" }}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconSec}>
                  <EvilIcons
                    name="arrow-right"
                    size={30}
                    color="#0D1F3C"
                    style={{ fontWeight: "700" }}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconSec}>
                  <MaterialCommunityIcons
                    name="arrow-expand-all"
                    size={24}
                    color="#0D1F3C"
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.subHeaderView}>
                <Text style={styles.subHeaderText}>Deposit</Text>
                <Text style={styles.subHeaderText}>Withdraw</Text>
                <Text style={styles.subHeaderText}>Send</Text>
                <Text style={styles.subHeaderText}>Exchange</Text>
              </View>
              <Text
                style={{ marginLeft: "4%", marginTop: 20, fontWeight: "bold" }}
              >
                Latest transactions
              </Text>
              <TransactionCard iconName="arrow-up" color="#DF5060" />
              <TransactionCard iconName="arrow-down" color="#75BF72" />
              <TransactionCard iconName="arrow-right" color="#347AF0" />
              <TransactionCard iconName="arrow-left" color="#DF5060" />
              <TransactionCard iconName="arrow-left" color="#DF5060" />
            </View>
          </ScrollView>
        </RBSheet>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#347AF0",
  },
  balance: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
    marginTop: 10,
  },
  text: {
    textAlign: "center",
    fontSize: 10,
    color: "white",
  },
  secView: {
    backgroundColor: "white",
    borderTopEndRadius: 30,
    borderTopLeftRadius: 30,
    // marginTop: -25,
    flex: 1,
  },
  depositBtn: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#EDF1F9",
    alignSelf: "center",
    padding: "5%",
    borderRadius: 50,
    marginTop: 10,
    elevation: 0,
  },
  headerView: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    alignSelf: "center",
    justifyContent: "space-around",
    marginTop: 20,
  },
  iconSec: {
    padding: "6%",
    width: "20%",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#EDF1F9",
    elevation: 2,
    borderRadius: 15,
  },
  subHeaderView: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    alignSelf: "center",
    justifyContent: "space-around",
    marginTop: 5,
  },
  subHeaderText: {
    color: "#0D1F3C",
  },
});
