import React from "react";
import countState from "../../helpers/countState";
import { Text, Box, Flex } from "@react-native-material/core";
import { StyleSheet } from "react-native";
const colors = ["#58e46b", "#a8e616", "#ecad00", "#fc702f", "#d80053", "#9700fc"];

const ResStiker = ({ resPlace, currentLang }) => {
  return (
    <Flex
      center
      style={{
        marginTop: 20,
        padding: 5,
        backgroundColor: colors[countState(resPlace.aqi)],
        borderRadius: 5,
      }}
    >
      <Box style={styles.boxCity}>
        <Text>
          {currentLang.findCityScreen.state[countState(resPlace.aqi)]} {resPlace.aqi}
        </Text>
        <Text>
          {currentLang.findCityScreen.adress} {resPlace.city.name}
        </Text>
        <Text>
          {currentLang.findCityScreen.geo} x:{resPlace.city.geo[0]}, y:
          {resPlace.city.geo[1]}
        </Text>
      </Box>
      <Box style={styles.boxState}>
        <Text>
          {currentLang.findCityScreen.dominant} {resPlace.dominentpol}
        </Text>
        {/* <Text>
      {currentLang.findCityScreen.dominant} {resPlace.time}
    </Text> */}
      </Box>
    </Flex>
  );
};
const styles = StyleSheet.create({
  boxCity: {},
  boxState: {},
});
export default ResStiker;
