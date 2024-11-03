// layout.tsx
import { Stack } from "expo-router";
import Header from "../components/header";
import { View, StyleSheet } from "react-native";

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <Header />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
