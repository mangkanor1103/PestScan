import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ThemedView } from '@/components/ThemedView';

export default function PestDetectionScreen() {
  return (
    <ThemedView style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Pest Detection</Text>

      {/* Camera Frame Icon */}
      <View style={styles.cameraFrame}>
        <MaterialCommunityIcons name="scan-helper" size={100} color="black" />
      </View>

      {/* Instruction Text */}
      <Text style={styles.instruction}>
        Align the camera to scan coffee plants for pests.
      </Text>

      {/* Capture Button */}
      <View style={styles.button}>
        <MaterialCommunityIcons name="camera" size={20} color="white" />
        <Text style={styles.buttonText}> Capture</Text>
      </View>

      {/* Detected Pest Info */}
      <Text style={styles.detectedText}>Detected: -</Text>
      <Text style={styles.suggestionText}>Management suggestion: -</Text>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20, 
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  cameraFrame: {
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
  instruction: {
    fontSize: 14,
    textAlign: 'center',
    color: '#555',
    marginBottom: 15,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#00897B',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  detectedText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  suggestionText: {
    fontSize: 14,
    color: '#666',
   
  },
});
