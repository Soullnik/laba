import React, {Component} from 'react';
import Layout from './hoc/Layout/Layout'
import {Route} from 'react-router-dom'
import GoogleMapApi from './containers/GoogleMapApi/GoogleMapApi'
// import Chat from './containers/Chat/Chat'


class App extends Component {
  render() {
    return (
    <Layout>
      <Route component={GoogleMapApi} />
    </Layout>
    );
  }
}

export default App