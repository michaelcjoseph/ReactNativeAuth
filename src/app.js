import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyC5UtTWSVjS1zSjXlbpYmgfIr1eucGQbns',
      authDomain: 'reactnativeauth-6b3c7.firebaseapp.com',
      databaseURL: 'https://reactnativeauth-6b3c7.firebaseio.com',
      projectId: 'reactnativeauth-6b3c7',
      storageBucket: 'reactnativeauth-6b3c7.appspot.com',
      messagingSenderId: '747079433276'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>Main App</Text>
      </View>
    );
  }
}

export default App;
