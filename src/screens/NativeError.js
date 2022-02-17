import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import * as Sentry from '@sentry/react-native';

const NativeError = () => (
  <TouchableOpacity onPress={() => Sentry.nativeCrash()}>
    <Text>Native Error</Text>
  </TouchableOpacity>
);

export default NativeError;
