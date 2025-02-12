import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  // Default values (empty at first)
  const [severity, setSeverity] = useState(""); // Will be "Low", "Moderate", or "High" after detection
  const [identifiedPests, setIdentifiedPests] = useState("0%");
  const [pestIncidence, setPestIncidence] = useState("0%");

  // Function to get text color based on severity
  const getSeverityColor = () => {
    if (severity === "Low") return "green";
    if (severity === "Moderate") return "orange";
    if (severity === "High") return "red";
    return "black"; // Default color when empty
  };

  return (
    <ThemedView style={styles.container}>
      {/* Dashboard Title */}
      <Text style={styles.title}>Farm Health Dashboard</Text>

      {/* Pest Severity */}
      <View style={styles.section}>
        <View style={styles.row}>
          <View>
            <Text style={styles.sectionTitle}>Pest Severity</Text>
            {severity ? (
              <Text style={[styles.levelText, { color: getSeverityColor() }]}>
                {severity}
              </Text>
            ) : null} 
          </View>
          <MaterialCommunityIcons name="chart-bar" size={40} color="black" />
        </View>
      </View>

      {/* Identified Pests */}
      <View style={styles.section}>
        <View style={styles.row}>
          <View>
            <Text style={styles.sectionTitle}>Identified Pests</Text>
            <Text style={styles.value}>{identifiedPests}</Text>
          </View>
          <MaterialCommunityIcons name="chart-bar" size={40} color="black" />
        </View>
      </View>

      {/* Pests Incidence */}
      <View style={styles.section}>
        <View style={styles.row}>
          <View>
            <Text style={styles.sectionTitle}>Pests Incidence</Text>
            <Text style={styles.value}>{pestIncidence}</Text>
          </View>
          <MaterialCommunityIcons name="chart-bar" size={40} color="black" />
        </View>
      </View>
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
  section: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  row: {
    flexDirection: 'row', // ✅ Aligns text on the left and icon on the right
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  levelText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
