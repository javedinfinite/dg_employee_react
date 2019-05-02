import React from 'react';
import AppContainer from './appContainer'
import { Provider } from 'react-redux';

import store from './store'

class App extends React.Component {
  render() {
    return(
      <Provider store={store}>
       <AppContainer/>
      </Provider>
    ) 
  }
}
export default App;