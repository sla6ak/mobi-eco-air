import React, { useState } from "react";
import { Stack, TextInput, Text, Button } from "@react-native-material/core";
import axios from "axios";
import Toast from "react-native-toast-message";
import StartMap from "../startMap/StartMap";
import ResStiker from "../resStiker/ResStiker";
import { StyleSheet } from "react-native";

const BASE_URL = "http://api.waqi.info/";
const TOKEN = "dda50d63cd50f9d8f1f471b3c052181b166dbd78";
// http://api.waqi.info/feed/kiev/?token=dda50d63cd50f9d8f1f471b3c052181b166dbd78

const FindeOfCity = ({ currentLang }) => {
  const [resPlace, setResPlace] = useState(null);
  const [city, setCity] = useState("kyiv");

  const tosty = (error) => {
    Toast.show({
      type: "BlackToast",
      text1: "error server",
      text2: `${error}`,
    });
  };

  const handleCity = (e) => {
    setCity(e);
  };

  const findInfo = async () => {
    if (city.length <= 2) {
      return;
    }
    const toLowerCity = city.toLowerCase();
    const resInfo = await axios.get(`${BASE_URL}feed/${toLowerCity}/?token=${TOKEN}`);
    if (resInfo.error) {
      console.log(error);
      return tosty(error);
    }
    if (resInfo.data?.data?.city) {
      // handle success
      setResPlace(resInfo.data.data);
      // общая инфа про город
      // console.log(resInfo.data.dominentpol);
      // тут инфа по конкретным составам
      console.log(resInfo.data.data.aqi);
      return;
    }
  };

  return (
    <Stack spacing={2} style={{ margin: 16 }}>
      <Text>{currentLang.findCityScreen.enter}</Text>
      <TextInput label="City" variant="standard" value={city} onChangeText={handleCity} />
      <Button
        title={currentLang.findCityScreen.btnSend}
        color="#57d167"
        tintColor="#003dc2"
        onPress={findInfo}
      />
      {resPlace ? <ResStiker currentLang={currentLang} resPlace={resPlace} /> : <StartMap />}
    </Stack>
  );
};

const styles = StyleSheet.create({
  boxCity: {},
  boxState: {},
});

export default FindeOfCity;
