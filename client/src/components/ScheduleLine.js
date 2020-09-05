// @flow
import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import moment from 'moment';
import ScheduleChip from './ScheduleChip';

const ScheduleLine = ({item}) => {
  const shifts = [item.morning, item.evening];

  return (
    <View style={styles.container} key={item._id}>
      <ScheduleChip
        item={{name: moment(item.date).format('ddd DD-MM-YY')}}
        color={'#978897'}
      />
      {shifts.map((shift, index) => (
        <ScheduleChip item={shift} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    margin: 1,
    flex: 1,
    flexDirection: 'row',
    borderRadius: 5,
  },
});

export default ScheduleLine;
