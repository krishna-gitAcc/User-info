import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import LoggedInPage from "./components/LoggedInPage";
import LogInPage from "./components/LogInPage";
import TryAgain from "./components/TryAgain";
import { Text, Card, Button, Icon } from "@rneui/themed";

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "589998042377-sl3gctj5rajjgftnvahofs9dr2ri9ar7.apps.googleusercontent.com",
    expoClientId:
      "589998042377-f6nm48qae6bul95nlcg5gesp9r444sbv.apps.googleusercontent.com",
    webClientId:
      "589998042377-q5mapavue1sduuhipjdah28a80dcssb2.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      setToken(response.authentication.accessToken);
      getUserInfo();
    }
    console.log(userInfo);
  }, [response, token]);

  const getUserInfo = async () => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const user = await response.json();
      console.log(user);
      // setUserInfo(user);
    } catch (error) {
      // Add your own error handler here
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Card>
        <Card.Title>Welcome To Kolkata</Card.Title>
        <Card.Divider />
        <Card.Image
          style={{ padding: 0 }}
          source={{
            uri: "https://media.istockphoto.com/id/1164386039/photo/howrah-bridge-on-river-ganges-at-kolkata-at-twilight-with-moody-sky.jpg?s=612x612&w=0&k=20&c=CHrNWdInFSDyERdvgd0f8935hZcBQU6lbYCE4LlXqUY=",
          }}
        />
        <Text style={{ marginBottom: 10, textAlign: "center" }}>
          Calcutta’s the only city I know where you are actively encouraged to
          stop strangers at random for a quick chat
        </Text>
      </Card>
      {userInfo === null ? (
        <LogInPage signIn={promptAsync} />
      ) : userInfo.status === "UNAUTHENTICATED" ? (
        <TryAgain signIn={promptAsync} />
      ) : (
        <LoggedInPage
          name={userInfo.name}
          email={userInfo.email}
          photoUrl={userInfo.picture}
          setUserInfo={setUserInfo}
        />
      )}
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
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
