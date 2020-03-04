import React from 'react';
import { Link } from 'react-router-dom';
import styles from './login.module.scss';

const Login: React.FC = () => {
  return (
    <div className={styles.loginLayout}>
      <Link to='/login_by_phone' className={styles.linkButton}>手机号登录</Link>
    </div>
  )
}

export default Login;