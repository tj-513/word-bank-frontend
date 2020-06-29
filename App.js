import { createStore, applyMiddleware } from 'redux';
import React from 'react';
import rootReducer from './src/config/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { NavigationContainer } from '@react-navigation/native';
import SidbarDrawer from './src/navigation/SidebarDrawer';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
          <SidbarDrawer />
      </NavigationContainer>
    </Provider>
  );
}
