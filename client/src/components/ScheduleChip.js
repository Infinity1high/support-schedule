// @flow

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const ScheduleChip = ({item}) => {
  const chipColor = item.color || '#005c13';
  return (
    <View
      style={[styles.container, {backgroundColor: chipColor}]}
      key={item._id || item.name}>
      <Text>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    margin: 1,
    flex: 3,
    borderRadius: 10,
  },
});

export default ScheduleChip;
