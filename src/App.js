import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import Details from "./components/Details/Details";
import Styles from "./Styles";

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={Styles.appView}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={Styles.navigator}
          initialRouteName="Home" backBehavior={"history"}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Search" component={Search} />
          <Tab.Screen name="Details" component={Details} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
