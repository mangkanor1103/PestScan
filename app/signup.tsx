// // app/signup.tsx
// import React from "react";
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
// import { useRouter } from "expo-router";

// export default function SignUpScreen() {
//   const router = useRouter();

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Sign Up</Text>
//       <TextInput style={styles.input} placeholder="Email" />
//       <TextInput style={styles.input} placeholder="Password" secureTextEntry />
//       <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry />

//       <TouchableOpacity style={styles.button} onPress={() => router.replace("/login")}>
//         <Text style={styles.buttonText}>Sign Up</Text>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={() => router.push("/login")}>
//         <Text style={styles.link}>Back to Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "white" },
//   title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
//   input: { width: "80%", padding: 12, borderWidth: 1, borderColor: "#ccc", marginBottom: 10, borderRadius: 5 },
//   button: { backgroundColor: "teal", padding: 12, borderRadius: 5, width: "80%", alignItems: "center" },
//   buttonText: { color: "white", fontWeight: "bold" },
//   link: { marginTop: 10, color: "blue" },
// });
