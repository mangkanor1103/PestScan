import { StyleSheet, Image } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function WeatherScreen() {
  return (
    <ThemedView style={styles.titleContainer}>
      <ThemedText type="title" style={styles.titleText}>
        Weather
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Align items vertically
    justifyContent: 'center', // Center items horizontally
    gap: 10,
    padding: 16,
    marginTop: 15,
    backgroundColor: 'transparent',
  },
  titleText: {
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center', // Optional: ensures text alignment for multiline text
  },
});
