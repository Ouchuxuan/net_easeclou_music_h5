import React from "react";
import styles from './router.module.scss';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Search from '../components/Search';
import MainLayout from '../components/MainLayout';

const AppContainer = () => {
  return (
    <Router>
      <div className={styles.appContainer}>
        <Switch>
          <Route path='/search' component={Search} exact={true}/>
          <Route path='/' component={MainLayout}/>
        </Switch>
      </div>
    </Router>
  )
}

export default AppContainer