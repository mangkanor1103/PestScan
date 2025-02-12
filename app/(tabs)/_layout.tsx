import { Tabs } from 'expo-router';
import React from 'react';
import { View, TouchableOpacity, StyleSheet, Platform, Text, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      {/* ✅ Custom Banner with Corn Image, Text, and Menu Icon */}
      <View style={styles.banner}>
        <View style={styles.leftSection}>
          <Image source={require('../../assets/images/corn.png')} style={styles.cornImage} />
          <Text style={styles.bannerText}>PestScan</Text>
        </View>
        <TouchableOpacity style={styles.menuButton} onPress={() => console.log('Menu opened')}>
          <MaterialCommunityIcons name="menu" size={28} color="black" />
        </TouchableOpacity>
      </View>

      {/* ✅ Tabs Configuration */}
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarStyle: Platform.select({
            ios: {
              // Use a transparent background on iOS to show the blur effect
              position: 'absolute',
            },
            default: {},
          }),
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
          }}
        />
        <Tabs.Screen
          name="pestdetection"
          options={{
            title: 'Pest Detection',
            tabBarIcon: ({ color }) => <MaterialCommunityIcons name="ladybug" size={28} color={color} />,
          }}
        />
        <Tabs.Screen
          name="weather"
          options={{
            title: 'Weather',
            tabBarIcon: ({ color }) => <MaterialCommunityIcons name="weather-cloudy" size={28} color={color} />,
          }}
        />
      </Tabs>
    </>
  );
}

/* ✅ Styles */
const styles = StyleSheet.create({
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Align text and corn image to the left, menu icon to the right
    padding: 16,
    backgroundColor: 'transparent', // Removed the white background
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center', // Align corn image and text vertically
  },
  bannerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black', // Text color
    marginLeft: 8, // Add space between the corn image and text
    marginTop: 25,
  },
  menuButton: {
    padding: 10,
    marginTop: 25,
  },
  cornImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginTop: 25,
  },
});
