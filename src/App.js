import React from 'react';
import {View} from 'react-native';

import * as Sentry from '@sentry/react-native';
import NativeError from './screens/NativeError';
import JSError from './screens/JSError';

Sentry.init({
  dsn: 'https://f4a87e0354814e2094cf6a1f4078f1db@o990675.ingest.sentry.io/5947351',
});

const App = () => {
  return (
    <View style={{flex: 1}}>
      <JSError />
      <NativeError />
    </View>
  );
};

export default App;
