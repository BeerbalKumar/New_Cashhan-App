import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  CheckBox,
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
import TransactionCard from "./../../Components/TranscationCard/transactionCard";
import RBSheet from "react-native-raw-bottom-sheet";
// import { Checkbox} from 'nat'

export default class AllAssets extends React.Component {
  constructor() {
    super();
    this.state = {
      transactionType: true,
      isSelected: false,
    };
  }
  transactionTypeFunc = (value) => {
    this.setState({ transactionType: value });
    this.RBSheet.open();
  };
  flterFunc = () => {
    this.setState({ transactionType: false });
    this.RBSheet.open();
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.flterFunc()}>
          <AntDesign
            name="filter"
            size={24}
            color="#347AF0"
            style={{ alignSelf: "flex-end", marginRight: 20, marginTop: 45 }}
          />
        </TouchableOpacity>
        <View style={styles.secView}>
          <ScrollView>
            <View>
              <TransactionCard
                iconName="arrow-up"
                color="#DF5060"
                path={this.transactionTypeFunc}
                value="allTransaction"
              />
              <TransactionCard
                iconName="arrow-down"
                color="#75BF72"
                path={this.transactionTypeFunc}
                value="allTransaction"
              />
              <TransactionCard
                iconName="arrow-right"
                color="#347AF0"
                path={this.transactionTypeFunc}
                value="allTransaction"
              />
              <TransactionCard
                iconName="arrow-left"
                color="#DF5060"
                path={this.transactionTypeFunc}
                value="allTransaction"
              />
              <TransactionCard
                iconName="arrow-left"
                color="#DF5060"
                path={this.transactionTypeFunc}
                value="allTransaction"
              />
              <TransactionCard
                iconName="arrow-right"
                color="#347AF0"
                path={this.transactionTypeFunc}
                value="allTransaction"
              />
              <TransactionCard
                iconName="arrow-left"
                color="#DF5060"
                path={this.transactionTypeFunc}
                value="allTransaction"
              />
              <TransactionCard
                iconName="arrow-down"
                color="#75BF72"
                path={this.transactionTypeFunc}
                value="allTransaction"
              />
              <TransactionCard
                iconName="arrow-down"
                color="#75BF72"
                path={this.transactionTypeFunc}
                value="allTransaction"
              />
              <TransactionCard
                iconName="arrow-down"
                color="#75BF72"
                path={this.transactionTypeFunc}
                value="allTransaction"
              />
              <TransactionCard
                iconName="arrow-down"
                color="#75BF72"
                path={this.transactionTypeFunc}
                value="allTransaction"
              />
            </View>
          </ScrollView>
        </View>
        <RBSheet
          ref={(ref) => {
            this.RBSheet = ref;
          }}
          height={600}
          openDuration={250}
          customStyles={{
            container: {
              justifyContent: "center",
              alignItems: "center",
              borderTopEndRadius: 20,
              borderTopLeftRadius: 20,
            },
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            {this.state.transactionType === true ? (
              <View>
                <View style={styles.transactionTypeHeader}>
                  <Text style={{ fontWeight: "bold" }}>Transaction type</Text>
                  <Text
                    style={{
                      marginRight: 80,
                      color: "#347AF0",
                      fontWeight: "bold",
                    }}
                  >
                    Done
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    marginLeft: "1%",
                    padding: "2%",
                  }}
                >
                  <Text
                    style={{
                      backgroundColor: "#EDF1F9",
                      padding: "1%",
                      color: "#347AF0",
                      borderRadius: 50,
                      width: "25%",
                      textAlign: "center",
                    }}
                  >
                    Select All
                  </Text>
                  <Text
                    style={{
                      backgroundColor: "#EDF1F9",
                      padding: "1%",
                      color: "#347AF0",
                      marginLeft: "2%",
                      borderRadius: 50,
                      width: "25%",
                      textAlign: "center",
                    }}
                  >
                    Clear All
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-around",
                    alignSelf: "center",
                    padding: "2%",
                  }}
                >
                  <TouchableOpacity
                    style={{
                      width: "15%",
                      backgroundColor: "#EDF1F9",
                      padding: 15,
                      borderRadius: 20,
                    }}
                  >
                    <AntDesign
                      name="pluscircleo"
                      size={24}
                      color="black"
                      style={{ alignSelf: "center" }}
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      width: "45%",
                      fontWeight: "bold",
                      fontSize: 18,
                      marginTop: 10,
                      color: "#0D1F3C",
                    }}
                  >
                    Deposted
                  </Text>
                  <CheckBox
                    value={this.state.isSelected}
                    onValueChange={() =>
                      this.setState({ isSelected: !this.state.isSelected })
                    }
                    style={styles.checkbox}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-around",
                    alignSelf: "center",
                    padding: "2%",
                  }}
                >
                  <TouchableOpacity
                    style={{
                      width: "15%",
                      backgroundColor: "#EDF1F9",
                      padding: 15,
                      borderRadius: 20,
                    }}
                  >
                    <EvilIcons
                      name="arrow-right"
                      size={30}
                      color="#0D1F3C"
                      style={{ fontWeight: "700" }}
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      width: "45%",
                      fontWeight: "bold",
                      fontSize: 18,
                      marginTop: 10,
                      color: "#0D1F3C",
                    }}
                  >
                    Withdraw
                  </Text>
                  <CheckBox
                    value={this.state.isSelected}
                    onValueChange={() =>
                      this.setState({ isSelected: !this.state.isSelected })
                    }
                    style={styles.checkbox}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-around",
                    alignSelf: "center",
                    padding: "2%",
                  }}
                >
                  <TouchableOpacity
                    style={{
                      width: "15%",
                      backgroundColor: "#EDF1F9",
                      padding: 15,
                      borderRadius: 20,
                    }}
                  >
                    <EvilIcons
                      name="arrow-left"
                      size={30}
                      color="#0D1F3C"
                      style={{ fontWeight: "700" }}
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      width: "45%",
                      fontWeight: "bold",
                      fontSize: 18,
                      marginTop: 10,
                      color: "#0D1F3C",
                    }}
                  >
                    Sent
                  </Text>
                  <CheckBox
                    value={this.state.isSelected}
                    onValueChange={() =>
                      this.setState({ isSelected: !this.state.isSelected })
                    }
                    style={styles.checkbox}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-around",
                    alignSelf: "center",
                    padding: "2%",
                  }}
                >
                  <TouchableOpacity
                    style={{
                      width: "15%",
                      backgroundColor: "#EDF1F9",
                      padding: 15,
                      borderRadius: 20,
                    }}
                  >
                    <MaterialCommunityIcons
                      name="arrow-expand-all"
                      size={24}
                      color="#0D1F3C"
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      width: "45%",
                      fontWeight: "bold",
                      fontSize: 18,
                      marginTop: 10,
                      color: "#0D1F3C",
                    }}
                  >
                    Exchange
                  </Text>
                  <CheckBox
                    value={this.state.isSelected}
                    onValueChange={() =>
                      this.setState({ isSelected: !this.state.isSelected })
                    }
                    style={styles.checkbox}
                  />
                </View>
              </View>
            ) : (
              <View>
                <ScrollView horizontal={true}>
                  <View style={styles.thirdSec}>
                    <TouchableOpacity style={styles.filterSec}>
                      <Text style={{ padding: 7, alignSelf: "center" }}>
                        Transacton type
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterSec}>
                      <Text style={{ padding: 7, alignSelf: "center" }}>
                        Coins
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterSec}>
                      <Text style={{ padding: 7, alignSelf: "center" }}>
                        Transacton type
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterSec}>
                      <Text style={{ padding: 7, alignSelf: "center" }}>
                        Transacton type
                      </Text>
                    </TouchableOpacity>
                  </View>
                </ScrollView>
                <TransactionCard iconName="arrow-up" color="#DF5060" />
                <TransactionCard iconName="arrow-down" color="#75BF72" />
                <TransactionCard iconName="arrow-right" color="#347AF0" />
                <TransactionCard iconName="arrow-left" color="#DF5060" />
                <TransactionCard iconName="arrow-left" color="#DF5060" />
                <TransactionCard iconName="arrow-right" color="#347AF0" />
                <TransactionCard iconName="arrow-left" color="#DF5060" />
                <TransactionCard iconName="arrow-down" color="#75BF72" />
              </View>
            )}
          </ScrollView>
        </RBSheet>
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
    borderTopEndRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: 40,
    paddingBottom: 0,
  },
  thirdSec: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
    alignSelf: "center",
    marginTop: 20,
  },
  filterSec: {
    width: "33%",
    backgroundColor: "#EDF1F9",
    alignSelf: "center",
    borderRadius: 50,
    margin: 5,
  },
  transactionTypeHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    alignSelf: "center",
    marginTop: 10,
  },
  checkbox: {
    borderRadius: 50,
    width: "20%",
    marginRight: "6%",
    marginTop: 10,
  },
});
