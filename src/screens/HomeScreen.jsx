import { Text, StatusBar, ImageBackground } from "react-native";
import { Button, Box } from "@react-native-material/core";
import { Flex } from "react-native-flex-layout";
import backHoume from "../img/clear-sky1.jpg";
import styles from "./Styles";
import React from "react";

const HomeScreen = ({ navigation, route }) => {
  const { currentLang } = route.params;
  return (
    <ImageBackground source={backHoume} style={{ width: "100%", height: "100%" }}>
      <Flex fill center style={styles.container}>
        <Box maxW={"80%"} style={styles.boxQuestion}>
          <Text style={styles.title}>Signalisation air</Text>
          <Button
            tintColor="#fff"
            style={styles.button}
            color={"#3aaee4"}
            title={currentLang.homeScreen.buttonFindCity}
            onPress={() => navigation.navigate("FindeCity")}
          />
          <StatusBar style="auto" />
        </Box>
      </Flex>
    </ImageBackground>
  );
};

export default HomeScreen;
