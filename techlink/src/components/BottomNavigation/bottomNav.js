import React from "react";
import { View, Text, PointPropType } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons";

// import styles from "./style"; 

// Screens
import Home from "../../components/home/home";
import Load from "../../components/home/load";
import Shipment from "../../components/home/sheapment";
import Profile from "../../components/home/profile";
import { color } from "react-native-reanimated";

// Screen Name

const homeName = "Home";
const loadName = "Loads";
const shipmentName = "Shepment";
const profileName = "Profile";

export default function BottomNav(){
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn == homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn == loadName) {
              iconName = focused ? "list" : "list-outline";
            } else if (rn == shipmentName) {
              iconName = focused ? "truck" : "truck-outline";
            } else if (rn == profileName) {
              iconName = focused ? "actor" : "actor-outline";
            }
            return <Ionicons name={iconName} size={size} color={color}></Ionicons>
          },
        })}>
        <Tab.Screen name={homeName} component = {Home}/>

        </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",
    marginTop: 500,
    
  },
});
