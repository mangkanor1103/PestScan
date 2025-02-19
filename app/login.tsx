// import React, { useState } from "react";
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
// import { useRouter } from "expo-router";

// export default function LoginScreen() {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async () => {
//   try {
//     console.log("Attempting login with:", { email, password }); // Debugging

//     const response = await fetch("http://192.168.101.78:8081/pestscan_api/login.php", {
//       method: "POST",
//       headers: { 
//         "Accept": "application/json",  // Ensure JSON response
//         "Content-Type": "application/json" 
//       },
//       body: JSON.stringify({ email, password }),
//     });

//     const textResponse = await response.text(); // Get raw response
//     console.log("Raw Response:", textResponse);

//     try {
//       const data = JSON.parse(textResponse); // Parse JSON safely
//       console.log("Parsed JSON Response:", data);

//       if (data.message) {
//         if (data.role === "admin") {
//           router.replace("/admin-tabs/home"); 
//         } else if (data.role === "user") {
//           router.replace("/");
//         } else {
//           Alert.alert("Login Failed", "Unknown user role.");
//         }
//       } else {
//         Alert.alert("Login Failed", data.error || "Invalid credentials");
//       }
//     } catch (jsonError) {
//       console.error("JSON Parse Error:", jsonError);
//       Alert.alert("Error", "Invalid server response.");
//     }

//   } catch (error) {
//     console.error("Login error:", error);
//     Alert.alert("Error", "Something went wrong. Try again.");
//   }
// };

  


//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>PestScan</Text>
//       <TextInput style={styles.input} placeholder="Email" onChangeText={setEmail} />
//       <TextInput style={styles.input} placeholder="Password" secureTextEntry onChangeText={setPassword} />

//       <TouchableOpacity style={styles.button} onPress={handleLogin}>
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={() => router.push("/signup")}>
//         <Text style={styles.link}>Sign Up</Text>
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
