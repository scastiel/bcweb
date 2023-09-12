import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import apiCall from '../redux/apiCall';
import * as React from "react";
import { useSelector, useDispatch } from "react-redux";  

const BcList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.apiReducer.data);
  const loading = useSelector((state) => state.apiReducer.loading);
  const token = useSelector((state) => state.tokenReducer.token);
  Alert.alert('that is the secret token : ', token);

  useEffect(() => {
    dispatch(apiCall('https://demo-btw.monkey-soft.fr/bcweb/bcx/', token));
  }, []);

/*   return (

            <SafeAreaView style={styles.container}>
                <Text style={styles.toolbar}>Choisir un bordereau</Text>
                <ScrollView style={styles.content}>
                <TextInput
                    style={styles.preview}
                    placeholder="bons de chargement"
                    editable={false}
                    multiline
                />
                </ScrollView>
            </SafeAreaView>

  ) */

  return (
    <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center'}}>
      {loading ? (
        <ActivityIndicator size="large" color="red" />
      ) : (
        <FlatList
          data={data}
          renderItem={({item}) => <Text>{item.title}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
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