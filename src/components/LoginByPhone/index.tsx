import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import styles from './LoginByPhone.module.scss';
import { NavBar, Icon, InputItem } from 'antd-mobile';

const LoginByPhone: React.FC<RouteComponentProps> = (props) => {
  return (
    <div className={styles.loginByPhoneLayout}>
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => props.history.goBack()}
      >手机号登录</NavBar>
      <div className="loginNote">未注册手机号登录后将自动创建账号</div>
      <InputItem type="phone" placeholder="请输入手机号码" clear={true} />
      <Link to='/login_by_phone' className={styles.linkButton}>下一步</Link>
    </div>
  )
}

export default LoginByPhone;