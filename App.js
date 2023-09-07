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
const endpointRefreshToken = "https://demo-btw.monkey-soft.fr/refresh-token/";

const App = () => {
  const [token, setToken] = React.useState("");
  const [refreshToken, setRefreshToken] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [bc, setBc] = React.useState("");
  const [isLogged, setIsLogged] = React.useState(false);

  const displayBcs = async () => {
    try {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const response = await axios.get(endpointBc, config);
      const bc = JSON.stringify(response.data);
      setBc(bc);
    } catch (error) {
      Alert.alert(
        "Error",
        `There was an error while displaying items : ${error}`
      );
    }
  };

  const renewToken = async () => {
    try {
      const response = await axios.post(
        endpointRefreshToken,
        JSON.stringify({
          refresh: refreshToken,
        }),
        {
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
        }
      );
      const accessToken = response.data.access;
      setToken(accessToken);
      displayBcs(token);
    } catch (error) {
      Alert.alert("Error", `There was an error while refreshing : ${error}`);
    }
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
      const refreshToken = response.data.refresh;
      setToken(accessToken);
      setRefreshToken(refreshToken);
      Alert.alert("AccessToken : ", accessToken);
      Alert.alert("Success", "Login successfull");
      setIsLogged(true);
      renewToken(token);
      //displayBcs(token);
    } catch (error) {
      Alert.alert("Error", `There was an error while logging: ${error}`);
    }
  };

  const onUsernameChange = (username) => setUsername(username);
  const onPasswordChange = (password) => setPassword(password);

  const renderCondition = (alreadyLogged)=> {
    Alert.alert("logged", "it is cool!");
    let logged = alreadyLogged
    if (logged) {
      return (
        <SafeAreaView style={styles.container}>
          <Text style={styles.toolbar}>App Name</Text>
          <ScrollView style={styles.content}>
            <TextInput
              style={styles.preview}
              value={bc}
              placeholder="bc"
              editable={false}
              multiline
            /> 
          </ScrollView>
        </SafeAreaView>
      )
    } else {
      Alert.alert("not logged", "it is not cool!");
      return (
        <SafeAreaView style={styles.container}>
          <Text style={styles.toolbar}>App Name</Text>
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
          </ScrollView>
        </SafeAreaView>
      )
    }
  }
  let toRender = renderCondition(isLogged);
  return toRender;
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
