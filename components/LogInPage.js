import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function LogInPage(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}> Sign In with Google</Text>
      <Button title="Sign In With googoe" onPress={() => props.signIn()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 25,
  },
  image: {
    marginTop: 15,
    width: 150,
    height: 150,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 3,
    borderRadius: 150,
  },
});
