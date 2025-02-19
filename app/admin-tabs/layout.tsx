import { Tabs } from "expo-router";

export default function AdminTabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="home" options={{ title: "Admin Home" }} />
      <Tabs.Screen name="sendnotif" options={{ title: "Send Notification" }} />
      <Tabs.Screen name="usermanagement" options={{ title: "User Management" }} />
    </Tabs>
  );
}
