import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import FindeCityScreen from "../screens/FindeCityScreen";
import { useSelector, useDispatch } from "react-redux";
import { langArr } from "../helpers/languages";
import { useEffect, useState } from "react";

const Stack = createNativeStackNavigator();

const Routers = () => {
  const langUser = useSelector((state) => state.language);
  const [currentLang, setCurrentLang] = useState(langArr[0]);

  useEffect(() => {
    setCurrentLang(langArr.find((el) => el.id === langUser));
  }, [langUser]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          initialParams={{ currentLang }}
          options={{
            title: "Hello!",
            headerStyle: {
              backgroundColor: "#22748d",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="FindeCity"
          component={FindeCityScreen}
          initialParams={{ currentLang }}
          options={{
            title: "to home",
            headerStyle: {
              backgroundColor: "#22748d",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routers;
