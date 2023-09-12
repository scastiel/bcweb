import * as React from "react";
import {
  View,
  StyleSheet,
} from 'react-native';
import Login from "./Login";
import BcList from "./BcList";
import { useSelector } from "react-redux";  


/* const endpointBc = "https://demo-btw.monkey-soft.fr/bcweb/bcx/";
const endpointRefreshToken = "https://demo-btw.monkey-soft.fr/refresh-token/"; */

const Main = () => {
  const logged = useSelector((state) => state.tokenReducer.isLogged);
  //const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      { logged ? <BcList/> : <Login/>}
    </View>
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

export default Main;
