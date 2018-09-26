import React from 'react'
import {Menu, Icon} from 'antd'
import Link from 'umi/link'

const MenuItemGroup = Menu.ItemGroup;
const {SubMenu} = Menu;


const Menus = ({onMenuClick}) => {
  return (

    <Menu
      mode="inline"
      theme={'dark'}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={{height: '100%'}}>
      <SubMenu key={'sub1'} title={<span>用户管理</span> }>
        <Menu.Item key={'1-1'} onClick={() => {onMenuClick('1-1')}}>
          <Link to='/user-manage' >
            <span>普通用户管理</span>
          </Link>
        </Menu.Item>
        <Menu.Item key={'1-2'} onClick={() => {onMenuClick('1-2')}}>
          <Link to='/user-manage-admin' >
            <span>管理员管理</span>
          </Link>
        </Menu.Item>

      </SubMenu>

      {/*<Menu.Item key={'2'} onClick={() => {onMenuClick('2')}}>*/}
        {/*<Link to='/award-setting'>*/}
          {/*<span>奖励设置</span>*/}
        {/*</Link>*/}
      {/*</Menu.Item>*/}
      <Menu.Item key={'3'} onClick={() => {onMenuClick('3')}}>
        <Link to='/sms-server'>
          <span>短信服务</span>
        </Link>
      </Menu.Item>

      <Menu.Item key={'4'} onClick={() => {onMenuClick('4')}}>
        <Link to='/goods-setting'>
          <span>商品设置</span>
        </Link>
      </Menu.Item >
      <Menu.Item key={'5'} onClick={() => {onMenuClick('5')}}>
        <Link to='/product-calc'>
          <span>参数管理</span>
        </Link>
      </Menu.Item>
      <Menu.Item key={'6'} onClick={() => {onMenuClick('6')}}>
        <Link to='/recharge-manage'>
          <span>充值管理</span>
        </Link>
      </Menu.Item>
      <Menu.Item key={'7'} onClick={() => {onMenuClick('7')}}>
        <Link to='/income-statistics'>
          <span>收入统计</span>
        </Link>
      </Menu.Item>
      <Menu.Item key={'8'} onClick={() => {onMenuClick('8')}}>
        <Link to='/withdraw-examine'>
          <span>提现审核</span>
        </Link>
      </Menu.Item>
      <Menu.Item key={'9'} onClick={() => {onMenuClick('9')}}>
        <Link to='/expenditure-statistics'>
          <span>支出统计</span>
        </Link>
      </Menu.Item>
      <Menu.Item key={'10'} onClick={() => {onMenuClick('10')}}>
        <Link to='/order-manage'>
          <span>订单管理</span>
        </Link>
      </Menu.Item>
    </Menu>
  )
};

export default Menus;
