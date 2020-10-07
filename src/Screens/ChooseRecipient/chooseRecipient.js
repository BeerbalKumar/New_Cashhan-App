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

export default class ChooseRecipient extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{ textAlign: "center" }}>
            435637737chnd ($103.24 USD)
          </Text>
        </View>
        <View style={styles.bottomView}>
          <TextInput
            placeholder="Search by names and number"
            style={styles.input}
          />
          <ScrollView>
            <View>
              <Text
                style={{ color: "grey", width: "90%", alignSelf: "center" }}
              >
                A
              </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("addmessage")}
              >
                <View style={styles.profileView}>
                  <Image
                    source={require("./../../../assets/images/profile.png")}
                    style={{
                      width: "11%",
                      height: 35,
                    }}
                  />
                  <View style={{ marginLeft: "2%" }}>
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                      Ada Perry
                    </Text>
                    <Text style={{ marginTop: 1 }}>786-222-8410</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("addmessage")}
              >
                <View style={styles.profileView}>
                  <Image
                    source={require("./../../../assets/images/profile.png")}
                    style={{
                      width: "11%",
                      height: 35,
                    }}
                  />
                  <View style={{ marginLeft: "2%" }}>
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                      Ada Perry
                    </Text>
                    <Text style={{ marginTop: 1 }}>786-222-8410</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("addmessage")}
              >
                <View style={styles.profileView}>
                  <Image
                    source={require("./../../../assets/images/profile.png")}
                    style={{
                      width: "11%",
                      height: 35,
                    }}
                  />
                  <View style={{ marginLeft: "2%" }}>
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                      Ada Perry
                    </Text>
                    <Text style={{ marginTop: 1 }}>786-222-8410</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("addmessage")}
              >
                <View style={styles.profileView}>
                  <Image
                    source={require("./../../../assets/images/profile.png")}
                    style={{
                      width: "11%",
                      height: 35,
                    }}
                  />
                  <View style={{ marginLeft: "2%" }}>
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                      Ada Perry
                    </Text>
                    <Text style={{ marginTop: 1 }}>786-222-8410</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("addmessage")}
              >
                <View style={styles.profileView}>
                  <Image
                    source={require("./../../../assets/images/profile.png")}
                    style={{
                      width: "11%",
                      height: 35,
                    }}
                  />
                  <View style={{ marginLeft: "2%" }}>
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                      Ada Perry
                    </Text>
                    <Text style={{ marginTop: 1 }}>786-222-8410</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("addmessage")}
              >
                <View style={styles.profileView}>
                  <Image
                    source={require("./../../../assets/images/profile.png")}
                    style={{
                      width: "11%",
                      height: 35,
                    }}
                  />
                  <View style={{ marginLeft: "2%" }}>
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                      Ada Perry
                    </Text>
                    <Text style={{ marginTop: 1 }}>786-222-8410</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <Text
                style={{
                  color: "grey",
                  width: "90%",
                  alignSelf: "center",
                  marginTop: 20,
                }}
              >
                B
              </Text>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("addmessage")}
              >
                <View style={styles.profileView}>
                  <Image
                    source={require("./../../../assets/images/profile.png")}
                    style={{
                      width: "11%",
                      height: 35,
                    }}
                  />
                  <View style={{ marginLeft: "2%" }}>
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                      Ada Perry
                    </Text>
                    <Text style={{ marginTop: 1 }}>786-222-8410</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("addmessage")}
              >
                <View style={styles.profileView}>
                  <Image
                    source={require("./../../../assets/images/profile.png")}
                    style={{
                      width: "11%",
                      height: 35,
                    }}
                  />
                  <View style={{ marginLeft: "2%" }}>
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                      Ada Perry
                    </Text>
                    <Text style={{ marginTop: 1 }}>786-222-8410</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("addmessage")}
              >
                <View style={styles.profileView}>
                  <Image
                    source={require("./../../../assets/images/profile.png")}
                    style={{
                      width: "11%",
                      height: 35,
                    }}
                  />
                  <View style={{ marginLeft: "2%" }}>
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                      Ada Perry
                    </Text>
                    <Text style={{ marginTop: 1 }}>786-222-8410</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("addmessage")}
              >
                <View style={styles.profileView}>
                  <Image
                    source={require("./../../../assets/images/profile.png")}
                    style={{
                      width: "11%",
                      height: 35,
                    }}
                  />
                  <View style={{ marginLeft: "2%" }}>
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                      Ada Perry
                    </Text>
                    <Text style={{ marginTop: 1 }}>786-222-8410</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("addmessage")}
              >
                <View style={styles.profileView}>
                  <Image
                    source={require("./../../../assets/images/profile.png")}
                    style={{
                      width: "11%",
                      height: 35,
                    }}
                  />
                  <View style={{ marginLeft: "2%" }}>
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                      Ada Perry
                    </Text>
                    <Text style={{ marginTop: 1 }}>786-222-8410</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("addmessage")}
              >
                <View style={styles.profileView}>
                  <Image
                    source={require("./../../../assets/images/profile.png")}
                    style={{
                      width: "11%",
                      height: 35,
                    }}
                  />
                  <View style={{ marginLeft: "2%" }}>
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                      Ada Perry
                    </Text>
                    <Text style={{ marginTop: 1 }}>786-222-8410</Text>
                  </View>
                </View>
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
  header: {
    marginTop: 80,
  },
  input: {
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    width: "90%",
    alignSelf: "center",
    padding: 7,
    marginTop: 20,
  },
  bottomView: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 30,
  },
  profileView: {
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    marginTop: 14,
    alignItems: "center",
  },
});
