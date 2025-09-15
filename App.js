import "react-native-url-polyfill/auto";
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import { AppProvider, useApp } from "./app/utils/AppContext";
import { SafeAreaView } from "react-native-safe-area-context";

function Main() {
  const { session, theme } = useApp();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
        <StatusBar style="auto" />
        <Text style={{ fontWeight: "bold", color: theme.colors.primary }}>
          PLL = Pretty Like Linda
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <AppProvider>
      <Main />
    </AppProvider>
  );
}
