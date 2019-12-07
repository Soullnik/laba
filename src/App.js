import React, {Component} from 'react';
import Layout from './hoc/Layout/Layout'
import {Route} from 'react-router-dom'
import GoogleMapApi from './containers/GoogleMapApi/GoogleMapApi'


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