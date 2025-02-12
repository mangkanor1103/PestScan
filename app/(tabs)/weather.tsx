import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ThemedView } from '@/components/ThemedView';

export default function WeatherScreen() {
  return (
    <ThemedView style={styles.container}>
      {/* Title (Styled Like 'Pest Detection' Header) */}
      <Text style={styles.title}>Weather</Text>

    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20, // Same as 'Pest Detection' title
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 2, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOpacity: 0.1,
    shadowRadius: 4,
    alignItems: 'center',
    marginBottom: 10,
  },
  temperature: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  condition: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginBottom: 5,
  },
  humidity: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
  },
});
