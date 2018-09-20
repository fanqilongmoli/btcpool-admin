import React from 'react'
import {Table, Row, Col, Button,Pagination} from 'antd'
import {connect} from 'dva';
import moment from 'moment-timezone'

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
    render: (text, record) =>{
      return moment(record.createdTime).format('YYYY-MM-DD HH:mm:ss')
    }
  },
];

const RechargeManage = ({dispatch,recharge, loading}) => {
  const {charges} = recharge;
  const pageChange = (page, pageSize) => {
    dispatch({
      type: 'recharge/charges',
      payload: {page: page - 1, size: pageSize}
    })
  };
  return (
    <div>
      <Table
        bordered={true}
        dataSource={recharge.charges.content}
        columns={columns}
        pagination={false}
        loading={loading.models.recharge}
        rowKey={record => record.id}/>

      <Pagination onChange={pageChange} pageSize={charges.size} current={charges.number + 1} total={charges.totalElements}/>
    </div>
  )

};

export default connect(({recharge, loading}) => ({recharge, loading}))(RechargeManage)




