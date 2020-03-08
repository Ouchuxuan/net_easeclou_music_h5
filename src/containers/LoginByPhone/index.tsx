import React, { useState, useCallback } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styles from './LoginByPhone.module.scss';
import { NavBar, Icon, InputItem, List, Toast } from 'antd-mobile';
import { checkMobileIsUseful } from '../../api/user';
import { connect } from 'react-redux';


const LoginByPhone: React.FC<RouteComponentProps> = (props) => {
  type phoneNum = string
  const [phoneNum, setPhoneNum] = useState<phoneNum>('');
  const submit = useCallback(
    async () => {
      console.log(Object.prototype.toString.call(phoneNum), phoneNum.trim())
      if (!(/^1[3456789]\d{9}$/.test(phoneNum.replace(/\s/g, '')))) {
        Toast.info("手机号码有误，请重填")
      } else {
        // 检测手机号是否可用
        const result = await checkMobileIsUseful(Number(phoneNum.toString().replace(/\s/g,'')))
        console.log(result)
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

const mapStateToProps = state:reduxState => {

}

export default LoginByPhone;