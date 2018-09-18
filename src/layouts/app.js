import React from 'react'
import {Button, Icon, Layout} from 'antd';
import Menus from './Menus'
import Headers from "./Headers";
import Bread from "./Bread";
import withRouter from 'umi/withRouter';
import {connect} from 'dva'
import config from '../utils/config'
import router from 'umi/router'

const {Header, Content, Sider} = Layout;
const App = ({dispatch, children, location}) => {
  const MenusProps = {
    onMenuClick(key) {
      dispatch({
        type: 'app/updateState',
        payload: {selectedKeys: key}
      })
    }
  };

  /**
   * token 不存在直接跳转到登录界面
   */
  if (window.localStorage.getItem(`${config.prefix}token`) == null && location.pathname !== config.loginPage) {
    router.push('/login');
  }

  if (location.pathname === config.loginPage) {

    return (
      <div>
        {children}
      </div>)
  }


  return (
    <Layout>
      <Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>
        <Headers/>
      </Header>
      <Layout style={{background: '#000', marginTop: 64}}>
        <Sider width={200} style={{background: '#000'}}>
          <Menus {...MenusProps}/>
        </Sider>
        <Content style={{padding: '24px', minHeight: 280}}>
          <Bread location={location}/>
          {children}
        </Content>
      </Layout>

    </Layout>
  )


};

export default withRouter(connect(({app, loading}) => ({app, loading}))(App));
