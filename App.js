import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";
import { Text } from "./src/components/typography/text.component";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { SafeArea } from "./src/components/utils/safe-area.component";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {
  useFonts as useLato,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato";


const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);

const Settings = () => (
  <SafeArea>
    <Text>Hello</Text>
  </SafeArea>
);

const Tab = createBottomTabNavigator();

const routeIconNames = {
  Restaurants: "restaurant",
  Settings: "settings",
  Map: "map",
};

const createScreenOptions = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    let iconName;

    iconName = routeIconNames[route.name];

    return <Ionicons name={iconName} size={size} color={color} />;
  },
});

export default function App() {
  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  let [latoLoaded] = useLato({
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsContextProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={createScreenOptions}
            tabBarOptions={{
              activeTintColor: "tomato",
              inactiveTintColor: "gray",
            }}
          >
            <Tab.Screen
              name="Restaurants"
              component={RestaurantsScreen}
              options={{ headerShown: false }}
            />
            <Tab.Screen
              name="Settings"
              component={Settings}
              options={{ headerShown: false }}
            />
            <Tab.Screen
              name="Map"
              component={Map}
              options={{ headerShown: false }}
            />
          </Tab.Navigator>

        </NavigationContainer>
        </RestaurantsContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
