// @flow

type Props = {

};

import {View, Image, Text, StyleSheet} from 'react-native'
const ScheduleChip = ({name, _id, color}) => {

  return(<View>
    <Text>{name}</Text>
  </View>)
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    margin: 1,
    flex: 3,
    borderRadius: 5
  }
});