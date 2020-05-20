import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

export class ForgetPassword extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.safeAreaStyle}>
        <Text>Good luck remembering it!</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    safeAreaStyle: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });