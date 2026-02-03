import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <LinearGradient colors={["#f8cdda", "#c2e9fb"]} style={styles.wrapper}>
      <View style={styles.card}>
        {/* Illustration */}
        <Image
          source={require("../../assets/images/TTP_Blue.png")}
          style={styles.image}
          resizeMode="contain"
        />

        {/* Title */}
        <Text style={styles.title}>Login To Your Account</Text>

        {/* Email */}
        <TextInput
          placeholder="Email"
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Password with eye */}
        <View style={styles.passwordBox}>
          <TextInput
            placeholder="Password"
            secureTextEntry={!showPassword}
            style={styles.passwordInput}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={20}
              color="#666"
            />
          </TouchableOpacity>
        </View>

        {/* Forgot */}
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* Login button */}
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        {/* Divider */}
        <Text style={styles.or}>or continue with</Text>

        {/* Social */}
        <View style={styles.socialRow}>
          <Ionicons name="logo-facebook" size={22} />
          <Ionicons name="logo-google" size={22} />
          <Ionicons name="logo-apple" size={22} />
        </View>

        {/* Signup */}
        <Text style={styles.signupLink}>
          Don’t have an account?{" "}
          <Text
            style={styles.signupLink}
            onPress={() => router.push("/(auth)/signup")}
          >
            Sign Up
          </Text>
        </Text>
      </View>
    </LinearGradient>
  );
}

/* ✅ STYLES — NO ERRORS */
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 24,
    padding: 24,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
  },
  passwordBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 14,
    width: "100%",
    marginBottom: 8,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 14,
  },
  forgot: {
    alignSelf: "flex-end",
    fontSize: 12,
    color: "#666",
    marginBottom: 16,
  },
  loginBtn: {
    backgroundColor: "#000",
    borderRadius: 30,
    paddingVertical: 14,
    width: "100%",
    alignItems: "center",
    marginBottom: 18,
  },
  loginText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  or: {
    fontSize: 12,
    color: "#888",
    marginBottom: 12,
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "60%",
    marginBottom: 16,
  },
  signup: {
    fontSize: 12,
    color: "#666",
  },
  signupLink: {
    fontWeight: "600",
    color: "#000",
  },
});
