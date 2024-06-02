import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native";
import tw from "twrnc";

export default function HomeScreen() {
  return (
    <View style={tw`flex-1 bg-white items-center justify-center`}>
      <Text style={tw`text-3xl`}>Hello Ali</Text>
      <StatusBar style="auto" />
    </View>
  );
}
