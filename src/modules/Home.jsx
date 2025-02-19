import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Card } from '@rneui/themed';
import { Button } from "@rneui/themed";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebaseConnection";

export default function Home({ navigation }) {
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        Alert.alert("Sesión Cerrada", "Has cerrado sesión correctamente.");
        navigation.reset({
          index: 0,
          routes: [{ name: "Login" }],
        });
      })
      .catch((error) => {
        Alert.alert("Error", error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Card containerStyle={styles.card}>
        <Card.Title>Tienda</Card.Title>
        <Card.Divider />
        <Button
          title="Cerrar Sesión"
          onPress={handleLogOut}
          containerStyle={styles.button}
        />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "90%",
    borderRadius: 10,
  },
  button: {
    marginTop: 10,
  },
});
