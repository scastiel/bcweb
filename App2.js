import React from "react";
import axios from "axios";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

//const endpoint = 'http://jsonplaceholder.typicode.com/posts';
const endpointLogin = "https://demo-btw.monkey-soft.fr/login/";
const endpointBc = "https://demo-btw.monkey-soft.fr/bcweb/bcx/";

const App = () => {
  const [token, setToken] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [bc, setBc] = React.useState("");

  const displayBcs = async () => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axios.get(endpointBc, config);
    const bc = JSON.stringify(response.data);
    setBc(bc);
  };

  const onSave = async () => {
    try {
      const response = await axios.post(
        endpointLogin,
        JSON.stringify({
          username: username,
          password: password,
        }),
        {
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
        }
      );
      const accessToken = response.data.access;
      setToken(accessToken);
      Alert.alert("AccessToken : ", accessToken);
      Alert.alert("Success", "Post successfully saved");
      displayBcs(token);
    } catch (error) {
      Alert.alert(
        "Error",
        `There was an error while saving the 
          post: ${error}`
      );
    }
  };

  const onUsernameChange = (username) => setUsername(username);
  const onPasswordChange = (password) => setPassword(password);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.toolbar}></Text>
      <ScrollView style={styles.content}>
        <TextInput
          style={styles.input}
          onChangeText={onUsernameChange}
          value={username}
          placeholder="Username"
        />
        <TextInput
          style={styles.input}
          onChangeText={onPasswordChange}
          value={password}
          placeholder="Password"
        />
        <TouchableOpacity onPress={onSave} style={styles.button}>
          <Text>Save</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.preview}
          value={bc}
          placeholder="bc"
          editable={false}
          multiline
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  toolbar: {
    backgroundColor: "#3498db",
    color: "#fff",
    textAlign: "center",
    padding: 25,
    fontSize: 20,
  },
  content: {
    flex: 1,
    padding: 10,
  },
  preview: {
    backgroundColor: "#bdc3c7",
    flex: 1,
    height: 500,
  },
  input: {
    backgroundColor: "#ecf0f1",
    borderRadius: 3,
    height: 40,
    padding: 5,
    marginBottom: 10,
    flex: 1,
  },
  button: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 3,
    marginBottom: 30,
  },
});

export default App;
