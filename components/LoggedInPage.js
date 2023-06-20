import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
// import { Card } from "react-native-elements";
import { value, Card } from "@rneui/base";

export default function LoggedInPage(props) {
  const logout = () => {
    props.setUserInfo(null);
  };
  return (
    <View>
      <Card containerStyle={{}} wrapperStyle={{}}>
        <Card.Title>User Info</Card.Title>
        <Card.Divider />
        <View
          style={{
            position: "relative",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: "100%", height: 100 }}
            resizeMode="contain"
            source={{ uri: props.photoUrl }}
          />
          <Text>{props.name}</Text>
        </View>
      </Card>
      <Pressable style={styles.button} onPress={logout}>
        <Text style={styles.text}>Log Out</Text>
      </Pressable>
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
  button: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "blue",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

// import * as React from "react";
// import { value Card } from "@rneui/base";
// import { value View value Image } from "react-native";

// export default () => {
//   return (
//     <Card containerStyle={{}} wrapperStyle={{}}>
//       <Card.Title>CARD WITH DIVIDER</Card.Title>
//       <Card.Divider />
//       <View
//         style={{
//           position: "relative",
//           alignItems: "center"
//         }}
//       >
//         <Image
//           style={{ width: "100%", height: 100 }}
//           resizeMode="contain"
//           source={{
//             uri:
//               "https://avatars0.githubusercontent.com/u/32242596?s=460&u=1ea285743fc4b083f95d6ee0be2e7bb8dcfc676e&v=4"
//           }}
//         />
//         <Text>Pranshu Chittora</Text>
//       </View>
//     </Card>
//   );
// }
