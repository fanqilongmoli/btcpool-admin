import React from 'react'
import {Table, Row, Col, Button} from 'antd'
import {connect} from 'dva';

const columns = [
  {
    title: '订单号',
    dataIndex: 'id',
    key: 'id',
  }, {
    title: '用户名',
    dataIndex: 'username',
    key: 'username',
  }, {
    title: '充值数',
    dataIndex: 'value',
    key: 'value',
  }, {
    title: '创建时间',
    dataIndex: 'createdTime',
    key: 'createdTime',
  },
];

const RechargeManage = ({recharge, loading}) => {
  return (
    <div>
      <Table
        bordered={true}
        dataSource={recharge.content}
        columns={columns}
        loading={loading.models.recharge}
        rowKey={record => record.id}/>
    </div>
  )

};

export default connect(({recharge, loading}) => ({recharge, loading}))(RechargeManage)




