import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Notification = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textInput}>You have selected Notification tab</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textInput: {
    fontFamily: 'arial',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Notification;
