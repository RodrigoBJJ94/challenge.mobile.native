import React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from "./Home";
import Home2 from "./Home2";
import Search from "./components/Search/Search";
import Details from "./components/Details/Details";

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <View style={Styles.appView}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home2"
          backBehavior={"history"}
          screenOptions={Styles.navigator}>
          <Tab.Screen name="Home2" component={Home2} />
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

/*
import HomeOne from "./components/Home/HomeOne/HomeOne";
import HomeTwo from "./components/Home/HomeTwo/HomeTwo";
import HomeThree from "./components/Home/HomeThree/HomeThree";
import HomeFour from "./components/Home/HomeFour/HomeFour";
import HomeFive from "./components/Home/HomeFive/HomeFive";
import HomeSix from "./components/Home/HomeSix/HomeSix";
import HomeSeven from "./components/Home/HomeSeven/HomeSeven";
<Tab.Screen name="2" component={HomeTwo} />
          <Tab.Screen name="3" component={HomeThree} />
          <Tab.Screen name="4" component={HomeFour} />
          <Tab.Screen name="5" component={HomeFive} />
          <Tab.Screen name="6" component={HomeSix} />
          <Tab.Screen name="7" component={HomeSeven} />
          
*/

