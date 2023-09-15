import {View, Text, ActivityIndicator, Alert} from 'react-native';
import apiCall from '../redux/apiCall';
import * as React from "react";
import { useSelector, useDispatch, useEffect } from "react-redux";  

const BcList = () => {
  const dispatch = useDispatch();
  const data = JSON.stringify(useSelector((state) => state.apiReducer.data.results));
  const loading = useSelector((state) => state.apiReducer.loading);
  const token = useSelector((state) => state.tokenReducer.token);
  //Alert.alert('that is the secret token : ', token);

  React.useEffect(() => {
    dispatch(apiCall('https://demo-btw.monkey-soft.fr/bcweb/bcx/', token));
  }, []);


  return (
    <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center'}}>
      {loading ? (
        <ActivityIndicator size="large" color="red" />
      ) : (
        <Text>
          {data}
        </Text>
      )}
    </View>
  );
}

/* const styles = StyleSheet.create({
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
  }); */

export default BcList;