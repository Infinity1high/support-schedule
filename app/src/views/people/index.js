import {Text} from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import {loadUsers} from '../actions.js';

const People = (props) => {
  console.log(props)
  return(
    <Text>People</Text>
  )
};

const mapStateToProps = (state) => ({
  ...state.dataReducer
});

const mapDispatchToProps = {
  loadUsers
};

export default withNavigation(connect(
  mapStateToProps,
  mapDispatchToProps,
)(People));

