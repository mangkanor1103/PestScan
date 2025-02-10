import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ThemedView style={styles.titleContainer}>
      <ThemedText type="title" style={styles.titleText}>
        Pest Detection
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
