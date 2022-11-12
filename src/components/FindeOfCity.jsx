import React, { useState } from "react";
import { Stack, TextInput, Text, Button, Box } from "@react-native-material/core";
import axios from "axios";
import Toast from "react-native-toast-message";
const BASE_URL = "http://api.waqi.info/";
const TOKEN = "dda50d63cd50f9d8f1f471b3c052181b166dbd78";
// http://api.waqi.info/feed/kiev/?token=dda50d63cd50f9d8f1f471b3c052181b166dbd78

const FindeOfCity = () => {
  const [resPlace, setResPlace] = useState(null);
  const [city, setCity] = useState("");

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
      return tosty(error);
    }
    // handle success
    setResPlace(resInfo.data);
    // общая инфа про город
    console.log(resInfo.data.data.city);
    // console.log(resInfo.data.city.geo[0]);
    // console.log(resInfo.data.city.geo[1]);
    // console.log(resInfo.data.city.name);
    // console.log(resInfo.data.city.url);
    // console.log(resInfo.data.city.dominentpol);
    // тут инфа по конкретным составам
    // console.log(resInfo.data.forecast.daily);
  };
  return (
    <Stack spacing={2} style={{ margin: 16 }}>
      <Text>Введите название населенного пункта</Text>
      <TextInput label="City" variant="standard" value={city} onChangeText={handleCity} />
      <Button title="Send" color="#44924e" tintColor="#254c9e" onPress={findInfo} />
      {resPlace ? (
        <Box>
          <Text>Adress: {resPlace.data.city.name}</Text>
          <Text>
            Geo location: x{resPlace.data.city.geo[0]}, y {resPlace.data.city.geo[1]}
          </Text>
        </Box>
      ) : null}
    </Stack>
  );
};

export default FindeOfCity;
