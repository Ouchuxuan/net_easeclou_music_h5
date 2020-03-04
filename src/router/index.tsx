import React from "react";
import styles from './router.module.scss';
import Loadable from '../utils/loadable';
import { HashRouter as Router, Switch, Route, } from 'react-router-dom';

import MainLayout from '../components/MainLayout';
const Search = Loadable(() => import('../components/MainLayout'));
const Login = Loadable(()=> import('../components/Login'));
const LoginByPhone = Loadable(() => import('../components/LoginByPhone'));
const AppContainer = () => {
  return (
    <Router>
      <div className={styles.appContainer} >
        <Switch>
          <Route path='/search' component={Search} exact={true} />
          <Route path='/login' component={Login} exact={true} />
          <Route path='/login_by_phone' component={LoginByPhone} exact={true} />
          <Route path='/' component={MainLayout} />
        </Switch>
      </div>
    </Router>
  )
}

export default AppContainer