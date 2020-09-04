import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import * as actions from '../actions.js';




const Schedule = (props) => {
  return (
    <ScrollView>
      <Text>hello</Text>
    </ScrollView>

  )
};

const mapStateToProps = (state) => ({
  ...state.dataReducer
});

const mapDispatchToProps = {
  loadSchedule: actions.loadSchedule
}

export default withNavigation(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Schedule));