import React from "react";
import { Text } from "@react-native-material/core";
import MapView from "react-native-maps";
import { StyleSheet, View, Dimensions } from "react-native";

const StartMap = () => {
  const map = `https://tiles.aqicn.org/tiles/${"aqi"}/{z}/${"x"}/${"y"}.png`;
  return (
    <View style={styles.container}>
      <Text>StartMap</Text>
      <MapView style={styles.map} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3d3d3d",
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width * 0.85,
    paddingLeft: 7,
    paddingRight: 7,
    paddingTop: 20,
    paddingBottom: 190,
    flex: 1,
  },
  map: {
    // width: Dimensions.get("window").width,
    // height: Dimensions.get("window").height,
    width: "100%",
    height: "100%",
  },
});

export default StartMap;
