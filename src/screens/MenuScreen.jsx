import { Text, StatusBar, ImageBackground } from "react-native";
import { Button, Box } from "@react-native-material/core";
import { Flex } from "react-native-flex-layout";
import backHoume from "../img/clear-sky1.jpg";
import styles from "./Styles";
import FindeOfCity from "../components/FindeOfCity";

const MenuScreen = ({ navigation }) => {
  return (
    <ImageBackground source={backHoume} style={{ width: "100%", height: "100%" }}>
      <Flex fill justify="start" items="center" style={styles.container}>
        <Box maxW={"80%"} style={styles.boxContent}>
          <Text style={styles.title}>Актуальное состояние воздуха в вашем городе:</Text>
          <FindeOfCity />

          <StatusBar style="auto" />
        </Box>
      </Flex>
    </ImageBackground>
  );
};

export default MenuScreen;
