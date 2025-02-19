import { View, Text } from "react-native";

export default function AdminHomeScreen() {  // ✅ Renamed from HomeScreen
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Welcome, Admin!</Text>
    </View>
  );
}
