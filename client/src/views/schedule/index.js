import React, {useEffect, useState} from 'react';
import moment from 'moment';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Button
} from 'react-native';
import keyBy from 'lodash/keyBy'
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import ScheduleLine from '../../components/ScheduleLine';
import Icon from 'react-native-vector-icons/Ionicons';


const Schedule = (props) => {
  useEffect(props.loadSchedule, []);

  const [page, changePage] = useState(0);

  const usersByKeys = props.people && keyBy(props.people, '_id');

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => page > 1 && changePage(page-1)}>
            <Icon name="chevron-back-outline" size={30}/>
          </TouchableOpacity>
            <Text style={styles.title}>{props.schedule && moment(props.schedule[page].dateStart).format('DD-MM-YY')}</Text>
          <TouchableOpacity onPress={() => page < props.schedule.length -1 && changePage(page+1)}>
            <Icon name="chevron-forward-outline" size={30}/>
          </TouchableOpacity>
        </View>
        {props.schedule && props.schedule[page].shifts && props.schedule[page].shifts.map(it => <ScheduleLine item={{...it, morning: usersByKeys[it.morning._id], evening: usersByKeys[it.evening._id]}}/>)}
      </ScrollView>
      <TouchableOpacity onPress={props.createSchedule} style={styles.button}>
       <Icon name='add' size={35} color='white'/>
      </TouchableOpacity>
    </SafeAreaView>

  )
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    position: 'relative'
  },
  container: {
    paddingHorizontal: 50,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 20,
  },
  title: {
    paddingHorizontal: 10,
    fontSize: 20,
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 50,
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'tomato',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const mapStateToProps = (state) => ({
  ...state.dataReducer
});

const mapDispatchToProps = {
  loadSchedule: actions.loadSchedule,
  createSchedule: actions.createNewSchedule
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Schedule);