import React, {Component} from 'react';
import Layout from './hoc/Layout/Layout'
import {Route, Switch} from 'react-router-dom'
import GoogleMapApi from './containers/GoogleMapApi/GoogleMapApi'
import Auth from './containers/Auth/Auth'


class App extends Component {
  render() {
    return (
    <Layout>
      <Switch>
      <Route path="/GoogleMap" component={GoogleMapApi} />
      <Route path="/Auth" component={Auth}/>
      </Switch>
    </Layout>
    );
  }
}

export default App