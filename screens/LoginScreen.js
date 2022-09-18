import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { Button, Input } from "@rneui/themed";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  function emailChangeHandler(text) {
    setEmail(text);
  }
  function passwordChangeHandler(text) {
    setPassword(text);
  }

  function signIn() {}

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={require("../assets/chatwartz.png")}
        style={styles.chatLogo}
      />
      <View style={styles.inputContainer}>
        <Input
          inputStyle={{ color: "#dadada" }}
          placeholder="Enter your email"
          type="email"
          value={email}
          onChangeText={emailChangeHandler}
        />
        <Input
          inputStyle={{ color: "#dadada" }}
          placeholder="Enter your password"
          type="password"
          value={password}
          onChangeText={passwordChangeHandler}
        />
      </View>

      <Button
        color="#ef8025"
        containerStyle={styles.button}
        title="Login"
        onPress={signIn}
      />

      <Button
        onPress={() => navigation.navigate("Register")}
        buttonStyle={{
          borderColor: "#ef8025",
        }}
        titleStyle={{
          color: "#ef8025",
        }}
        containerStyle={styles.button}
        title="Register"
        type="outline"
      />
      {/* <View style={{ height: 10 }}></View> */}
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#1e1f24",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
  },
  chatLogo: {
    height: 200,
    width: 200,
  },
  inputContainer: {
    marginTop: 10,
    width: 300,
    color: "#ef8025",
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
