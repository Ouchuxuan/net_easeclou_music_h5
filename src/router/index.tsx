import React from "react";
import styles from './router.module.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import found from '../components/found';
import friends from '../components/friends';
import mine from '../components/mine';
import video from '../components/mine';
import search from '../components/search';

const AppContainer = () => {
  return (
    <Router>
      <div className={styles.appContainer}>
        {/*头部导航条*/}
        <ul className={styles.nav}>
          <li className={styles.navItem}><a href="https://www.baidu.com">占位</a></li>
          <li className={styles.navItem}> <Link to="/mine">我的</Link></li>
          <li className={styles.navItem}> <Link to="/found">发现</Link></li>
          <li className={styles.navItem}> <Link to="/friends">朋友</Link></li>
          <li className={styles.navItem}> <Link to="/video">视频</Link></li>
          <li className={styles.navItem}> <Link to="/search">搜索</Link></li>
        </ul>
        <div className="mainContent">
          <Switch>
            <Route path='/mine' component={mine}/>
            <Route path='/found' component={found}/>
            <Route path='/friends' component={friends}/>
            <Route path='/video' component={video}/>
          </Switch>
        </div>
        <Route path='/search' component={search}/>
        </div>
    </Router>
  )
}

export default AppContainer