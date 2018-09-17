import React from 'react'
import {Breadcrumb} from 'antd';

const breadcrumbNameMap = {
  '/user-manage': '普通用户管理',
  '/award-setting': '奖励设置',
  '/sms-server': '短信服务',
  '/goods-setting': '商品设置',
  '/product-calc': '生产力计算',
  '/recharge-manage': '充值管理',
  '/income-statistics': '收入统计',
  '/withdraw-examine': '提现审核',
  '/expenditure-statistics': '支出统计',
  '/user-manage-admin': '管理员管理',
};

const Bread = ({location}) => {
  console.log('location', location);
  return (
    <Breadcrumb>
      <Breadcrumb.Item><span style={{
        color: '#ffffff',
        fontSize: '20px',
        fontWeight: 700
      }}>当前所在位置 : {breadcrumbNameMap[location.pathname]}</span></Breadcrumb.Item>
    </Breadcrumb>
  )
};

export default Bread;
