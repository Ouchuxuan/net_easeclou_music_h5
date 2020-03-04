import React, { useState, useCallback } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styles from './LoginByPhone.module.scss';
import { NavBar, Icon, InputItem, List } from 'antd-mobile';

const LoginByPhone: React.FC<RouteComponentProps> = (props) => {
  type phoneNum = string
  const [phoneNum, setPhoneNum] = useState<phoneNum>('');
  const submit = useCallback(
    () => {
      if (!(/^1[3456789]\d{9}$/.test(phoneNum))) {
        alert("手机号码有误，请重填");
      } else {
        props.history.push('/')
      }

    },
    [phoneNum,props.history],
  )
  return (
    <div className={styles.loginByPhoneLayout}>
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => props.history.goBack()}
      >手机号登录</NavBar>
      <div className={styles.mainLayout}>
        <div className={styles.loginNote}>未注册手机号登录后将自动创建账号</div>
        <List>
          +86<InputItem type="phone" value={phoneNum} className={styles.inputForm} placeholder="请输入手机号码" clear={true} onChange={val => { setPhoneNum(val) }} />
        </List>
        <div className={styles.nextStep} onClick={() => submit()}>下一步</div>
      </div>
    </div>
  )
}

export default LoginByPhone;