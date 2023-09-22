import { useEffect } from 'react';
import BcList from '../BcList';
//import { CommonActions } from '@react-navigation/native';
import LogoutButton from '../LogoutButton';
import {View} from 'react-native';
import { useSelector } from 'react-redux';

const BcListScreen = ({ navigation }) => {
    const logged = useSelector((state) => state.tokenReducer.isLogged)
    useEffect(() => {
      if (!logged) {
        navigation.replace('Login')
      }
    }, [logged])

    return (
        <View>
            <LogoutButton/>
            <BcList/>
        </View>
    );
};

export default BcListScreen;