import { useSelector } from 'react-redux';
import Login from '../Login';
import { CommonActions } from '@react-navigation/native';
import { useEffect } from 'react';

const LoginScreen = ({ navigation }) => {
  const logged = useSelector((state) => state.tokenReducer.isLogged)
  useEffect(() => {
    if (logged) {
      navigation.replace('BcList')
    }
  }, [logged])

    return (
        <Login/>
    );
};

export default LoginScreen;

