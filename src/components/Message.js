import * as React from "react";
import {
  Text,
} from 'react-native';
import { useSelector } from "react-redux";  

const Message = () => {
    const message = useSelector((state) => state.apiReducer.message);
    const error = useSelector((state) => state.apiReducer.error);

    return (
        <Text>
          { message }
          { error }
        </Text>
      );
}

export default Message;