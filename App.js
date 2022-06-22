import * as React from "react";
import { Text, View, TextInput, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View>
        <Text>Name: Buyuksari Mustafa Can</Text>
        <Text>Number: 7</Text>
        <Text>Group name: KP04</Text>
      </View>
    </View>
  );
}

function OddScreen() {
  const [counter, setCounter] = React.useState(0)

  
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Text>Counter:</Text>

      <View
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center ",
          flexDirection: "row",
          width: "100%",
          marginBottom: 16,
        }}
      >
        <Button
          title="-"
          onPress={() => setCounter(counter - 1)}
          color="#841584"
        />
        <Text
          style={{ textAlign: "center", fontSize: 24, marginHorizontal: 16 }}
        >
          {counter}
        </Text>
        <Button
          title="+"
          onPress={() => setCounter(counter + 1)}
          color="#841584"
        />
      </View>
      <Button
      
        title="Reset"
        onPress={() => setCounter(0)}
        color="#841584"
      />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Odd Variant" component={OddScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
