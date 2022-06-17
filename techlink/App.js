import *as React from "react";

import { StyleSheet, Text, View, Dimensions } from "react-native";
// import BottomNav from './src/components/BottomNavigation/bottomNav'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import FindLoad from './src/Screens/signup_login/findLoad/findLoad';
import Register from './src/Screens/signup_login/registration/register';
import Verification from './src/Screens/signup_login/verification/verification'
import PlaceYourBid from './src/Screens/signup_login/bidPlace/bidPlace'
import DeliverLoad from './src/Screens/signup_login/loadDeliery/loadDeliveryTime'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <PaperProvider>
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
      headerShown: false
      }}>
        <Stack.Screen name="FindLoad" component={FindLoad} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="PlaceYourBid" component={PlaceYourBid} />
        <Stack.Screen name="DeliverLoad" component={DeliverLoad} />
       
        
      </Stack.Navigator>
  </NavigationContainer>
  </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",
    marginTop: 500,
    
  },
});
