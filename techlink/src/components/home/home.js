import React, { useEffect, useState } from "react";

import { StyleSheet, Text, View, Dimensions } from "react-native";

export default function home({navigation}) {
  return (
    <View style={styles.container}>
      <Text >
this is home page      </Text>
      <Text style={styles.stpc}>{StepCount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",
    marginTop: 50,
  },
});
