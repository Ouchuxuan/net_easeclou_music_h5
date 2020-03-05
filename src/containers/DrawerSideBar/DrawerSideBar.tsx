import React from 'react';
import styles from './DrawerSideBar.module.scss';
import {Link} from 'react-router-dom'
// import {Button} from 'antd-mobile';
const DrawerSideBar:React.FC = () => {
  return (
    <div className={styles.DrawerSideBarLayout}>
      <div className={styles.loginTag}>
        <div className={styles.tagMessage}>
          <p>登陆网易云音乐</p>
          <p>手机电脑多端同步，尽享海量高品质音乐</p>
        </div>
        <Link className={styles.loginButton} to="/login">立即登录</Link>
      </div>
    </div>
  )
}

export default DrawerSideBar;