import React, { useCallback, useState } from 'react';
import styles from './MainLayout.module.scss';
import { Switch, Route, Link, Redirect, } from 'react-router-dom';
import Found from '../Found';
import Friends from '../Friends';
import Mine from '../Mine';
import Video from '../Video';
import { Icon, Drawer } from 'antd-mobile';
import DrawerSideBar from '../DrawerSideBar/DrawerSideBar';



const DrawerSideBarNode = (<DrawerSideBar></DrawerSideBar>);
const MainLayout: React.FC = () => {
  const Height = document.documentElement.clientHeight;
  const [open, setOpenState] = useState(false)
  // 事件写在useCallBack里面呀
  const hangdleMenuClick = useCallback(() => {
    setOpenState(!open)
  }, [open])
  return (

    <Drawer sidebarStyle={{ height: Height, width:'80%',overflowY:'auto' }} open={open} sidebar={DrawerSideBarNode} enableDragHandle={false} onOpenChange={openStatus => setOpenState(openStatus)}>
      <div className={styles.mianLayout}>
        {/*头部导航条*/}
        <ul className={styles.nav}>
          <li className={styles.navItem}><div className={styles.menu} onClick={() => hangdleMenuClick()}></div></li>
          <li className={styles.navItem}> <Link to="/mine">我的</Link></li>
          <li className={styles.navItem}> <Link to="/found">发现</Link></li>
          <li className={styles.navItem}> <Link to="/friends">朋友</Link></li>
          <li className={styles.navItem}> <Link to="/video">视频</Link></li>
          <li className={styles.navItem}> <Link to="/search" className={styles.icon}><Icon type="search" /></Link></li>
        </ul>
        <div className="mainContent">
          <Switch>
            <Route path='/mine' component={Mine} />
            <Route path='/found' component={Found} />
            <Route path='/friends' component={Friends} />
            <Route path='/video' component={Video} />
            <Redirect to='/mine' />
          </Switch>
        </div>
      </div></Drawer>
  )
}

export default MainLayout;