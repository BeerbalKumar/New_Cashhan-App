import * as React from "react";
import { View, Text, Button, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import Welcome from "./../../Screens/Welcome/welcome";
import Login from "./../../Screens/Login/login";
import Pincode from "./../../Screens/Pincode/pincode";
import SignUp from "./../../Screens/Signup/signp";
import ForgatPass from "./../../Screens/ForgatPassword/forgatpass";
import CheckEmail from "./../../Screens/CheckEmail/checkEmail";
import NewPassword from "./../../Screens/NewPassword/newPassword";
import Home from "./../../Screens/Home/home";
import TransactionScreen from "./../../Screens/Transaction/transaction";
import Portfolio from "../../Screens/Portfolio/portfolio";
import ConfirnPin from "./../../Screens/ConfirmPin/confirmPin";
import VerificationScreen from "./../../Screens/Verification/verification";
import Wallet from "./../../Screens/Wallet/wallet";
import AllAssets from "./../../Screens/AllAssets/allAssets";
import AllTransaction from "./../../Screens/AllTransaction/allTransaction";
import TransactionDetails from "./../../Screens/TransactionDetail/transactionDetail";
import WithDraw from "./../../Screens/WithDraw/withDraw";
import ToFriendSendScreen from "./../../Screens/ToFriendSend/toFriendSendScreen";
import VerifyNumberScreen from "./../../Screens/VerifyNumber/verifyNumber";
import ChooseRecipient from "./../../Screens/ChooseRecipient/chooseRecipient";
import AddMessage from "./../../Screens/AddMessage/addMessage";
import SendFriend from "./../../Screens/SendFriend/sendfriend";
import SendTransactionDetails from "./../../Screens/sendTransactionDetails/sendTransactionDetail";
import ProfileScreen from "./../../Screens/Profile/profile";
import PersonalInformation from "./../../Screens/PersonalInfo/personalinfo";
import ChangePassword from "./../../Screens/ChangePassword/changepassword";
import Security from "./../../Screens/Security/security";
import WellDone from "./../../Screens/Welldone/welldone";
import TwoFactorVerification from "./../../Screens/ToFactorVerification/twofactorverification";
import VerifyPincode from "./../../Screens/VerifyPincode/verifyPincode";
import {
  MaterialCommunityIcons,
  AntDesign,
  Feather,
  Ionicons,
  Entypo,
  SimpleLineIcons,
} from "@expo/vector-icons";

function DrawerContent(props) {
  return (
    <View style={{ flex: 1, backgroundColor: "#F2F2F2" }}>
      <View>
        <Image
          source={require("./../../../assets/images/profile.png")}
          style={{
            width: "63%",
            height: 151,
            alignSelf: "center",
            marginTop: 60,
            marginRight: "10%",
          }}
        />
        <Text
          style={{
            marginLeft: "10%",
            width: "90%",
            fontSize: 18,
            fontWeight: "bold",
            color: "#0D1F3C",
          }}
        >
          Macdoney Hardwick
        </Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          icon={() => (
            <AntDesign name="pluscircleo" size={24} color="#CFD2D8" />
          )}
          label="Deposit"
          onPress={() => props.navigation.closeDrawer()}
          labelStyle={{ color: "black", marginLeft: 0 }}
        />
        <DrawerItem
          icon={() => (
            <SimpleLineIcons
              name="arrow-left-circle"
              size={24}
              color="#CFD2D8"
            />
          )}
          label="WithDraw"
          onPress={() => props.navigation.navigate("withdraw")}
          labelStyle={{ color: "black", marginLeft: 0 }}
        />
        <DrawerItem
          icon={() => (
            <SimpleLineIcons
              name="arrow-right-circle"
              size={24}
              color="#CFD2D8"
            />
          )}
          label="Send"
          onPress={() => props.navigation.navigate("toFriendSendScreen")}
          labelStyle={{ color: "black", marginLeft: 0 }}
        />
        <DrawerItem
          icon={() => (
            <MaterialCommunityIcons
              name="arrow-expand-all"
              size={24}
              color="#CFD2D8"
            />
          )}
          label="Exchange"
          onPress={() => props.navigation.closeDrawer()}
          labelStyle={{ color: "black", marginLeft: 0 }}
        />
        <DrawerItem
          icon={() => <Feather name="user" size={24} color="#CFD2D8" />}
          label="Profile"
          onPress={() => props.navigation.navigate("profileScreen")}
          labelStyle={{ color: "black", marginLeft: 0 }}
        />
        <DrawerItem
          style={{ marginTop: 100 }}
          icon={() => <Entypo name="log-out" size={24} color="#CFD2D8" />}
          label="Sign out"
          onPress={() => props.navigation.closeDrawer()}
          labelStyle={{ color: "black", marginLeft: 0 }}
        />
      </DrawerContentScrollView>
    </View>
  );
}

const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      drawerStyle={{ width: 240}}
    >
      <Drawer.Screen
        style={{ backgroundColor: "blue" }}
        name="Home"
        component={TabNavigator}
        options={{
          drawerLabel: "Wallet",
          drawerIcon: () => <Feather name="home" size={24} color="#CFD2D8" />,
          inactiveTintColor: "white",
          activeTintColor: "white",
        }}
      />
    </Drawer.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="deposit"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "portfolio") {
            iconName = focused ? (
              <MaterialCommunityIcons
                name="cube-outline"
                size={24}
                color="#3783F5"
              />
            ) : (
              <MaterialCommunityIcons
                name="cube-outline"
                size={24}
                color="#78839C"
              />
            );
          } else if (route.name === "Transaction") {
            iconName = focused ? (
              <MaterialCommunityIcons
                name="arrow-collapse"
                size={24}
                color="#3783F5"
              />
            ) : (
              <MaterialCommunityIcons
                name="arrow-collapse"
                size={24}
                color="#78839C"
              />
            );
          } else if (route.name === "deposit") {
            iconName = focused ? (
              <AntDesign
                name="pluscircle"
                size={60}
                color="#3783F5"
                style={{ marginBottom: 30 }}
              />
            ) : (
              <AntDesign
                name="pluscircle"
                size={60}
                color="#3783F5"
                style={{ marginBottom: 30 }}
              />
            );
          }

          return iconName;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#3783F5",
        inactiveTintColor: "#78839C",
      }}
    >
      <Tab.Screen
        name="Transaction"
        component={TransactionScreen}
        options={{}}
      />
      <Tab.Screen name="deposit" component={Wallet} />
      <Tab.Screen name="portfolio" component={Portfolio} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();
function Navigator(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="welcome"
          component={Welcome}
          options={{ headerShown: null }}
        />

        <Stack.Screen
          name="login"
          component={Login}
          options={{
            headerTitle: "Welcome Back",
            headerTitleAlign:"center",
            headerTitleStyle: {
              color: "#0D1F3C",
            },
            headerTintColor:"white",
            headerTransparent: true,
          }}
        />

        <Stack.Screen
          name="pincode"
          component={Pincode}
          options={{
            headerLeft: () => (
              <View style={{ marginLeft: 20 }}>
                <Ionicons name="ios-arrow-back" size={24} color="#0D1F3C" />
              </View>
            ),
            headerTitle: "Create a PIN",
            headerTitleStyle: {
              color: "#0D1F3C",
              marginLeft: 55,
            },
            headerTransparent: true,
          }}
        />

        <Stack.Screen
          name="confirmPin"
          component={ConfirnPin}
          options={{
            headerLeft: () => (
              <View style={{ marginLeft: 20 }}>
                <Ionicons name="ios-arrow-back" size={24} color="#0D1F3C" />
              </View>
            ),
            headerTitle: "Confirm PIN",
            headerTitleStyle: {
              color: "#0D1F3C",
              marginLeft: 55,
            },
            headerTransparent: true,
          }}
        />

        <Stack.Screen
          name="verificationSceen"
          component={VerificationScreen}
          options={{
            headerLeft: () => (
              <View style={{ marginLeft: 20 }}>
                <Ionicons name="ios-arrow-back" size={24} color="#0D1F3C" />
              </View>
            ),
            headerTitle: "Verification Required",
            headerTitleAlign:"center",
            headerTitleStyle: {
              color: "#0D1F3C",
              // marginLeft: 55,
            },
            headerTransparent: true,
          }}
        />

        <Stack.Screen
          name="signup"
          component={SignUp}
          options={{
            headerTitle: "Create Account",
            headerTitleAlign:"center",
            headerTitleStyle: {
              color: "#0D1F3C",
            },
            headerTintColor:"white",
            headerTransparent: true,
          }}
        />

        <Stack.Screen
          name="forgatPassword"
          component={ForgatPass}
          options={{
            headerLeft: () => (
              <View style={{ marginLeft: 20 }}>
                <Ionicons name="ios-arrow-back" size={24} color="#0D1F3C" />
              </View>
            ),
            headerTitle: "Forgot Password",
            headerTitleAlign:"center",
            headerTitleStyle: {
              color: "#0D1F3C",
              // marginLeft: 40,
            },
            headerTransparent: true,
          }}
        />

        <Stack.Screen
          name="chekEmail"
          component={CheckEmail}
          options={{ headerShown: null }}
        />
        <Stack.Screen
          name="newPassword"
          component={NewPassword}
          options={{ headerShown: null }}
        />
        <Stack.Screen
          name="wallet"
          component={DrawerNavigator}
          options={{headerShown:false
          }}
        />

        <Stack.Screen
          name="home"
          component={Home}
          options={{
            headerLeft: () => (
              <View style={{ marginLeft: 20 }}>
                <Ionicons name="ios-arrow-back" size={24} color="black" />
              </View>
            ),
            headerTitle: "Welcome to Cashhand",
            headerTitleAlign:"center",
            headerTitleStyle: {
              color: "black",
            },
            headerRight: () => (
              <View style={{ marginRight: 20 }}>
                <Entypo name="menu" size={24} color="black" />
              </View>
            ),
            headerTransparent: true,
          }}
        />

        <Stack.Screen
          name="allAssets"
          component={AllAssets}
          options={{
            headerLeft: () => (
              <View style={{ marginLeft: 20 }}>
                <Ionicons name="ios-arrow-back" size={24} color="#0D1F3C" />
              </View>
            ),
            headerTitle: "All Cashhand",
            headerTitleAlign:"center",
            headerTitleStyle: {
              color: "#0D1F3C",
            },
            headerTransparent: true,
          }}
        />

        <Stack.Screen
          name="allTransaction"
          component={AllTransaction}
          options={{
            headerLeft: () => (
              <View style={{ marginLeft: 20 }}>
                <Ionicons name="ios-arrow-back" size={24} color="#0D1F3C" />
              </View>
            ),
            headerTitle: "All Transaction",
            headerTitleAlign:"center",
            headerTitleStyle: {
              color: "#0D1F3C",
            },
            headerTransparent: true,
          }}
        />

        <Stack.Screen
          name="transactionDetails"
          component={TransactionDetails}
          options={{
            headerLeft: () => (
              <View style={{ marginLeft: 20 }}>
                <Ionicons name="ios-arrow-back" size={24} color="#0D1F3C" />
              </View>
            ),
            headerTitle: "Transaction Details",
            headerTitleAlign:"center",
            headerTitleStyle: {
              color: "#0D1F3C",
            },
            headerTransparent: true,
          }}
        />

        <Stack.Screen
          name="withdraw"
          component={WithDraw}
          options={{
            headerLeft: () => (
              <View style={{ marginLeft: 20 }}>
                <Ionicons name="ios-arrow-back" size={24} color="#0D1F3C" />
              </View>
            ),
            headerTitle: "Withdraw",
            headerTitleAlign:"center",
            headerTitleStyle: {
              color: "#0D1F3C",
            },
            headerTransparent: true,
          }}
        />

        <Stack.Screen
          name="toFriendSendScreen"
          component={ToFriendSendScreen}
          options={{
            headerLeft: () => (
              <View style={{ marginLeft: 20 }}>
                <Ionicons name="ios-arrow-back" size={24} color="#0D1F3C" />
              </View>
            ),
            headerTitle: "Send To Your Friend",
            headerTitleAlign:"center",
            headerTitleStyle: {
              color: "#0D1F3C",
            },
            headerTransparent: true,
          }}
        />

        <Stack.Screen
          name="verifyNumberScreen"
          component={VerifyNumberScreen}
          options={{
            headerLeft: () => (
              <View style={{ marginLeft: 20 }}>
                <Ionicons name="ios-arrow-back" size={24} color="#0D1F3C" />
              </View>
            ),
            headerTitle: "Verify Number",
            headerTitleAlign:"center",
            headerTitleStyle: {
              color: "#0D1F3C",
            },
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="chooseRecipient"
          component={ChooseRecipient}
          options={{
            headerLeft: () => (
              <View style={{ marginLeft: 20 }}>
                <Ionicons name="ios-arrow-back" size={24} color="#0D1F3C" />
              </View>
            ),
            headerTitle: "Choose Recipient",
            headerTitleAlign:"center",
            headerTitleStyle: {
              color: "#0D1F3C",
            },
            headerTransparent: true,
          }}
        />

        <Stack.Screen
          name="addmessage"
          component={AddMessage}
          options={{
            headerLeft: () => (
              <View style={{ marginLeft: 20 }}>
                <Ionicons name="ios-arrow-back" size={24} color="#0D1F3C" />
              </View>
            ),
            headerTitle: "Add Message",
            headerTitleAlign:"center",
            headerTitleStyle: {
              color: "#0D1F3C",
            },
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="sendFirend"
          component={SendFriend}
          options={{
            headerLeft: () => (
              <View style={{ marginLeft: 20 }}>
                <Ionicons name="ios-arrow-back" size={24} color="#0D1F3C" />
              </View>
            ),
            headerTitle: "Send To Your Friend ",
            headerTitleAlign:"center",
            headerTitleStyle: {
              color: "#0D1F3C",
            },
            headerTransparent: true,
          }}
        />

        <Stack.Screen
          name="sendtransactionDetails"
          component={SendTransactionDetails}
          options={{
            headerLeft: () => (
              <View style={{ marginLeft: 20 }}>
                <Ionicons name="ios-arrow-back" size={24} color="#0D1F3C" />
              </View>
            ),
            headerTitle: "Transaction Details",
            headerTitleAlign:"center",
            headerTitleStyle: {
              color: "#0D1F3C",
            },
            headerTransparent: true,
          }}
        />

        <Stack.Screen
          name="profileScreen"
          component={ProfileScreen}
          options={{
            headerLeft: () => (
              <View style={{ marginLeft: 20 }}>
                <Ionicons name="ios-arrow-back" size={24} color="#0D1F3C" />
              </View>
            ),
            headerTitle: "Transaction Details",
            headerTitleAlign:"center",
            headerTitleStyle: {
              color: "#F2F2F2",
            },
            headerTransparent: true,
          }}
        />

        <Stack.Screen
          name="personalInformation"
          component={PersonalInformation}
          options={{
            headerLeft: () => (
              <View style={{ marginLeft: 20 }}>
                <Ionicons name="ios-arrow-back" size={24} color="#0D1F3C" />
              </View>
            ),
            headerTitle: "Personal Information",
            headerTitleAlign:"center",
            headerTitleStyle: {
              color: "#0D1F3C",
            },
            headerTransparent: true,
          }}
        />

        <Stack.Screen
          name="changePassword"
          component={ChangePassword}
          options={{
            headerLeft: () => (
              <View style={{ marginLeft: 20 }}>
                <Ionicons name="ios-arrow-back" size={24} color="#0D1F3C" />
              </View>
            ),
            headerTitle: "Change Password",
            headerTitleAlign:"center",
            headerTitleStyle: {
              color: "#0D1F3C",
            },
            headerTransparent: true,
          }}
        />

        <Stack.Screen
          name="security"
          component={Security}
          options={{
            headerLeft: () => (
              <View style={{ marginLeft: 20 }}>
                <Ionicons name="ios-arrow-back" size={24} color="#0D1F3C" />
              </View>
            ),
            headerTitle: "Security",
            headerTitleAlign:"center",
            headerTitleStyle: {
              color: "#0D1F3C",
            },
            headerTransparent: true,
          }}
        />

        <Stack.Screen
          name="weldone"
          component={WellDone}
          options={{
            headerLeft: () => (
              <View style={{ marginLeft: 20 }}>
                <Ionicons name="ios-arrow-back" size={24} color="#0D1F3C" />
              </View>
            ),
            headerTitle: "Well Done!",
            headerTitleAlign:"center",
            headerTitleStyle: {
              color: "#0D1F3C",
            },
            headerTransparent: true,
          }}
        />

        <Stack.Screen
          name="twoFactorVerification"
          component={TwoFactorVerification}
          options={{
            headerLeft: () => (
              <View style={{ marginLeft: 20 }}>
                <Ionicons name="ios-arrow-back" size={24} color="#0D1F3C" />
              </View>
            ),
            headerTitle: "Two-Factor Verification",
            headerTitleAlign:"center",
            headerTitleStyle: {
              color: "#0D1F3C",
            },
            headerTransparent: true,
          }}
        />

        <Stack.Screen
          name="verifyPincode"
          component={VerifyPincode}
          options={{
            headerLeft: () => (
              <View style={{ marginLeft: 20 }}>
                <Ionicons name="ios-arrow-back" size={24} color="#0D1F3C" />
              </View>
            ),
            headerTitle: "Verification Required",
            headerTitleAlign:"center",
            headerTitleStyle: {
              color: "#0D1F3C",
            },
            headerTransparent: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
