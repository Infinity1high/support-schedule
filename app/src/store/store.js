import { createStore, applyMiddleware, compose as composeEnhancer} from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';

let compose = composeEnhancer;

if (__DEV__) {
  compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composeEnhancer;
}

const store = createStore(reducers, compose(applyMiddleware(ReduxThunk)));

export default store;