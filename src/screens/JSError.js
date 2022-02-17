import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const JSError = () => {
  const obj = {};

  return (
    <TouchableOpacity onPress={() => obj.myAwesomeFunction('Wow')}>
      <Text>Javascript Error</Text>
    </TouchableOpacity>
  );
};

export default JSError;
