import React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import Details from "./components/Details/Details";

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <View style={Styles.appView}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          backBehavior={"history"}
          screenOptions={Styles.navigator}>
          <Tab.Screen name="Home2" component={Home} />
          <Tab.Screen name="Search" component={Search} />
          <Tab.Screen name="Details" component={Details} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

const Styles = StyleSheet.create({
  appView: {
    flex: 1,
  },
  navigator: {
    tabBarStyle: {
      height: 0
    },
    swipeEnabled: false,
  }
});
