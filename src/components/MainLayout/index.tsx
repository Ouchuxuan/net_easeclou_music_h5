import React from 'react';
import styles from './MainLayout.module.scss';
import { Switch, Route, Link } from 'react-router-dom';
import Found from '../Found';
import Friends from '../Friends';
import Mine from '../Mine';
import Video from '../Video';

const MainLayout = (props: any) => {
  return (
    <div className="mianLayout">
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
          <Route path='/mine' component={Mine} />
          <Route path='/found' component={Found} />
          <Route path='/friends' component={Friends} />
          <Route path='/video' component={Video} />
        </Switch>
      </div>
    </div>
  )
}

export default MainLayout;