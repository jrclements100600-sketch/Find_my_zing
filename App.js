import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.spark}>✦</Text>

        <Text style={styles.title}>Find My Zing</Text>

        <Text style={styles.subtitle}>
          Meet someone who matches your energy.
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Find My Zing</Text>
        </TouchableOpacity>

        <Text style={styles.smallText}>
          Unlimited swipes • Real connections • Video chat
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF7FB",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  spark: {
    fontSize: 70,
    marginBottom: 10,
  },
  title: {
    fontSize: 38,
    fontWeight: "800",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 35,
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 30,
    backgroundColor: "#000000",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },
  smallText: {
    marginTop: 25,
    fontSize: 13,
    opacity: 0.6,
    textAlign: "center",
  },
});
