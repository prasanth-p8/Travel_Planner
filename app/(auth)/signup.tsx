import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useState } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function SignupScreen() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <LinearGradient colors={["#f8cdda", "#c2e9fb"]} style={styles.wrapper}>
      {/* Header Image */}
      <ImageBackground
        source={require("../../assets/images/app_bg.jpg")}
        style={styles.header}
        resizeMode="cover"
      >
        <Image
          source={require("../../assets/images/TTP_Blue.png")}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.headerText}>Enjoy the trip</Text>
        <Text style={styles.subHeaderText}>Sign up</Text>
      </ImageBackground>

      {/* Card */}
      <View style={styles.card}>
        <Text style={styles.title}>New Account</Text>

        {/* Name */}
        <TextInput placeholder="Full Name" style={styles.input} />

        {/* Email */}
        <TextInput
          placeholder="Email"
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Contact */}
        <TextInput
          placeholder="Contact"
          style={styles.input}
          keyboardType="phone-pad"
          autoCapitalize="none"
        />

        {/* Location */}
        <TextInput
          placeholder="Location"
          style={styles.input}
          keyboardType="default"
          autoCapitalize="none"
        />

        {/* Password */}
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
              color="#999"
            />
          </TouchableOpacity>
        </View>

        {/* Referral Code */}
        <TextInput
          placeholder="Referral Code"
          style={styles.input}
          keyboardType="default"
          autoCapitalize="none"
        />

        {/* Signup Button */}
        <TouchableOpacity style={styles.signupBtn}>
          <Text style={styles.signupText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Social */}
        <View style={styles.socialRow}>
          <Ionicons name="logo-facebook" size={22} color="#555" />
          <Ionicons name="logo-google" size={22} color="#555" />
          <Ionicons name="logo-apple" size={22} color="#555" />
        </View>

        {/* Footer */}
        <Text style={styles.footer}>
          Already have an account?{" "}
          <Text
            style={styles.loginLink}
            onPress={() => router.push("/(auth)/login")}
          >
            Login
          </Text>
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  header: {
    height: 260,
    justifyContent: "flex-end",
    padding: 24,
    borderRadius: 20,
    marginBottom: 16,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  headerText: {
    color: "#030101",
    fontSize: 24,
    fontWeight: "600",
  },
  subHeaderText: {
    color: "#460e0e",
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 60,
  },
  card: {
    backgroundColor: "#fff",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    padding: 24,
    marginTop: -100,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 20,
  },
  image: {
    width: 125,
    height: 125,
    marginBottom: 5,
    alignContent: "center",
    alignSelf: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 10,
    padding: 14,
    marginBottom: 14,
    backgroundColor: "#fafafa",
  },
  passwordBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 10,
    paddingHorizontal: 14,
    marginBottom: 20,
    backgroundColor: "#fafafa",
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 14,
  },
  signupBtn: {
    backgroundColor: "#181818",
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 18,
  },
  signupText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 16,
  },
  footer: {
    textAlign: "center",
    fontSize: 12,
    color: "#777",
  },
  loginLink: {
    color: "#272727",
    fontWeight: "600",
  },
});
