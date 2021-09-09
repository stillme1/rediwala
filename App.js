import React from 'react';
import type {Node} from 'react';

import {
  SafeAreaView,
  View,
  StatusBar,
} from 'react-native';

import LocationSearch from './src/screens/LocationSearch';
import Landing from './src/screens/Landing'

const App: () => Node = () => {
  
  return (
    <SafeAreaView>
      <StatusBar
        backgroundColor= '#eee'
      />
      
      {/* <LocationSearch/> */}
      <Landing/>

    </SafeAreaView>
  );
};

export default App;