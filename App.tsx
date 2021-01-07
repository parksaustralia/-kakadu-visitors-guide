import * as React from "react";
// import { color } from "react-native-reanimated";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, View, Text } from "react-native";
import { useNavigation, NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./src/Home";

function DrawerScreen() {
  return (
    <Drawer.Navigator overlayColor="transparent">
      <Drawer.Screen name="Home" component={TabScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
  );
}

function TabScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: HomeIcon,
        }}
      />
      <Tab.Screen
        name="Plan"
        component={PlanScreen}
        options={{
          tabBarIcon: PlanIcon,
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: MapIcon,
        }}
      />
      <Tab.Screen
        name="Nature"
        component={NatureScreen}
        options={{
          tabBarIcon: NatureIcon,
        }}
      />
      <Tab.Screen
        name="Culture"
        component={CultureScreen}
        options={{
          tabBarIcon: CultureIcon,
        }}
      />
    </Tab.Navigator>
  );
}

function HomeIcon(props: { focused: boolean; color: string; size: number }) {
  return <Ionicons name="home-outline" {...props} />;
}

function PlanIcon(props: { focused: boolean; color: string; size: number }) {
  return <Ionicons name="information-circle-outline" {...props} />;
}

function MapIcon(props: { focused: boolean; color: string; size: number }) {
  return <Ionicons name="map-outline" {...props} />;
}

function NatureIcon(props: { focused: boolean; color: string; size: number }) {
  return <Ionicons name="leaf-outline" {...props} />;
}

function CultureIcon(props: { focused: boolean; color: string; size: number }) {
  return <Ionicons name="people-circle-outline" {...props} />;
}

function PlanScreen() {
  return (
    <View style={styles.container}>
      <Text>Plan</Text>
      <StatusBar style="auto" />
    </View>
  );
}

function MapScreen() {
  return (
    <View style={styles.container}>
      <Text>Map</Text>
      <StatusBar style="auto" />
    </View>
  );
}

function NatureScreen() {
  return (
    <View style={styles.container}>
      <Text>Nature</Text>
      <StatusBar style="auto" />
    </View>
  );
}

function CultureScreen() {
  return (
    <View style={styles.container}>
      <Text>Culture</Text>
      <StatusBar style="auto" />
    </View>
  );
}

function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text>About</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={DrawerScreen}
          options={{
            title: "Kakadu Visitors Guide",
            headerStyle: {
              backgroundColor: "#983222",
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
}

const styles = StyleSheet.create({
  container: {
    // alignItems: "top",
    backgroundColor: "#fff",
    flex: 1,
    // justifyContent: "center",
  },
});
