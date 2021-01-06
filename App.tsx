import * as React from "react";
import { color } from "react-native-reanimated";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, View, Text } from "react-native";
import { useNavigation, NavigationContainer } from "@react-navigation/native";

function MainScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarIcon: HomeIcon }}
      />
      <Tab.Screen name="Plan" component={PlanScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Nature" component={NatureScreen} />
      <Tab.Screen name="Culture" component={CultureScreen} />
    </Tab.Navigator>
  );
}

function HomeIcon(props: { focused: boolean; color: string; size: number }) {
  return <Ionicons name="home-outline" color={color} />;
}

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <StatusBar style="auto" />
      <Button title="Go to Plan" onPress={() => navigation.navigate("Plan")} />
    </View>
  );
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

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator overlayColor="transparent">
        <Drawer.Screen name="Home" component={MainScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
  },
});
