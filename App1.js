import React, { Component } from 'react';
import axios from 'axios';
import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';

//const endpoint = 'http://jsonplaceholder.typicode.com/posts';
const endpointLogin = 'https://demo-btw.monkey-soft.fr/login/';
const endpointBc = 'https://demo-btw.monkey-soft.fr/bcweb/bcx/';
 
export default class App extends Component {
    state = {
      token: '',
      username: '',
      password: '',
      bc: '',
    };
   
/*     onLoad = async (accessToken) => {
        this.setState({ token: 'Loading, please wait...' });
        const token = accessToken;
        const config = {
          headers: { Authorization: `Bearer ${token}` }
        };
        const response = await axios.get(endpointBc, config);
        const bc = JSON.stringify(response);
        this.setState({ bc });
    } */

    displayBcs = async (accessToken) => {
     
      const token = accessToken;
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };
      const response = await axios.get(endpointBc, config);
      const bc = JSON.stringify(response.data);
      this.setState({ bc });
    }    
    
    onSave = async () => {
        const { username, password } = this.state;
        try {
          const response = await axios.post(endpointLogin, 
            JSON.stringify({
              "username": username,
              "password": password
            }),
            {
            headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            },
          });
          const accessToken = response.data.access;
          this.setState({ token: accessToken });
          Alert.alert('AccessToken : ', accessToken);
          Alert.alert('Success', 'Post successfully saved');
          this.displayBcs(accessToken);
        } catch (error) {
          Alert.alert('Error', `There was an error while saving the 
          post: ${error}`);
       }
    }

/*     onSave = async () => {
      const { username, password } = this.state;
      try {
        const response = await axios.post(endpointLogin, {
          headers: {
          'Content-Type': 'application/json;charset=UTF-8',
         },
          params: {
            username,
            password
          }
        });
        const accessToken = JSON.stringify(response.access);
        Alert.alert('AccessToken : ', accessToken);
        Alert.alert('Success', 'Post successfully saved');
        this.displayBcs(accessToken);
      } catch (error) {
        Alert.alert('Error', `There was an error while saving the 
        post: ${error}`);
     }
  } */
    
    onUsernameChange = (username) => this.setState({ username });
    onPasswordChange = (password) => this.setState({ password });
    
    render() {
      const { bc, username, password } = this.state;
      return (
        <SafeAreaView style={styles.container}>
          <Text style={styles.toolbar}>Add a new post</Text>
          <ScrollView style={styles.content}>
            <TextInput
              style={styles.input}
              onChangeText={this.onUsernameChange}
              value={username}
              placeholder="Username"
            />
            <TextInput
              style={styles.input}
              onChangeText={this.onPasswordChange}
              value={password}
              placeholder="Password"
            />
            <TouchableOpacity onPress={this.onSave} style=
            {styles.button}>
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
    }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: '#fff',
  },
  toolbar: {
   backgroundColor: '#3498db',
   color: '#fff',
   textAlign: 'center',
   padding: 25,
   fontSize: 20,
  },
  content: {
   flex: 1,
   padding: 10,
  },
  preview: {
   backgroundColor: '#bdc3c7',
   flex: 1,
   height: 500,
  },
  input: {
   backgroundColor: '#ecf0f1',
   borderRadius: 3,
   height: 40,
   padding: 5,
   marginBottom: 10,
   flex: 1,
  },
  button: {
   backgroundColor: '#3498db',
   padding: 10,
   borderRadius: 3,
   marginBottom: 30,
  },
});



 
