const API_URL = "http://192.168.101.78:8081/pestscan_api"; // Change this to your local IP

export async function loginUser(email: string, password: string) {
  console.log("Login attempt with:", { email, password });  // Debugging
  try {
    const response = await fetch(`${API_URL}/login.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Login Error:", error);
    return { error: "Something went wrong" };
  }
}
