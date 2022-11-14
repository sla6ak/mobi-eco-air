import { Text, StatusBar, ImageBackground } from "react-native";
import { Button, Box } from "@react-native-material/core";
import { Flex } from "react-native-flex-layout";
import backHoume from "../img/clear-sky1.jpg";
import styles from "./Styles";
import FindeOfCity from "../components/findeOfCity/FindeOfCity";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  getLastKnownPositionAsync,
  getForegroundPermissionsAsync,
} from "expo-location";
import { useState, useEffect } from "react";

const FindeCityScreen = ({ navigation, route }) => {
  const [location, setLocation] = useState(null);
  const { currentLang } = route.params;

  useEffect(() => {
    const loc = async () => {
      let { status } = await requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }
      console.log("status:", status);
      let locat = await getCurrentPositionAsync({});
      console.log("location:", location);
      setLocation(locat);
    };
    loc();
  }, []);

  return (
    <ImageBackground source={backHoume} style={{ width: "100%", height: "100%" }}>
      <Flex fill justify="start" items="center" style={styles.container}>
        <Box maxW={"95%"} style={styles.boxContent}>
          <Text style={styles.title}>{currentLang.findCityScreen.title}</Text>
          <FindeOfCity currentLang={currentLang} />
          <StatusBar style="auto" />
        </Box>
      </Flex>
    </ImageBackground>
  );
};

export default FindeCityScreen;
