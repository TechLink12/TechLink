import React, { useEffect, useState } from "react";

import { StyleSheet, Text, View, Dimensions } from "react-native";
import BottomNav from "./src/components/BottomNavigation/bottomNav";




export default function App() {
  return (
  <BottomNav></BottomNav>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",
    marginTop: 50,
  },
});
