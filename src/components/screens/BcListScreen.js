import BcList from '../BcList';
//import { CommonActions } from '@react-navigation/native';
import LogoutButton from '../LogoutButton';
import {View} from 'react-native';

const BcListScreen = ({ navigation }) => {
    return (
        <View>
            <LogoutButton/>
            <BcList/>
        </View>
    );
};

export default BcListScreen;