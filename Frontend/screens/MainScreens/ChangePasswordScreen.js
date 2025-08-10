import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const ChangePasswordScreen = ({ navigation }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleChangePassword = () => {
    if (!oldPassword || !newPassword || !confirmPassword) {
      setError("Please fill in all fields.");
    } else if (newPassword !== confirmPassword) {
      setError("New password and confirm password do not match.");
    } else {
      Alert.alert("Password changed successfully!");
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setError("");
    }
  };

  return (
    <ImageBackground
      // source={require("../../assets/background.jpg")}
      style={styles.background}
    >
      <LinearGradient
        colors={["rgba(0,0,0,0.8)", "rgba(0,0,0,0.2)"]}
        style={styles.gradient}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Change Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Old Password"
            secureTextEntry={true}
            placeholderTextColor="#aaa"
            value={oldPassword}
            onChangeText={(text) => setOldPassword(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="New Password"
            secureTextEntry={true}
            placeholderTextColor="#aaa"
            value={newPassword}
            onChangeText={(text) => setNewPassword(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry={true}
            placeholderTextColor="#aaa"
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
          />
          {error ? <Text style={styles.error}>{error}</Text> : null}
          <TouchableOpacity
            onPress={handleChangePassword}
            style={styles.changePasswordButton}
          >
            <Text style={styles.buttonText}>Change Password</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  gradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  container: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
    fontFamily: "sans-serif-medium",
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 20,
    width: "100%",
    fontSize: 16,
    color: "#333",
    fontFamily: "sans-serif",
  },
  changePasswordButton: {
    backgroundColor: "#007bff",
    borderRadius: 25,
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginTop: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "sans-serif-medium",
  },
  error: {
    color: "red",
    marginBottom: 10,
    textAlign: "center",
    fontFamily: "sans-serif",
  },
});

export default ChangePasswordScreen;
