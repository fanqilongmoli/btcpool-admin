import React from 'react';
import {connect} from 'dva';
import {Table, Row, Col, Button} from 'antd'

// "cost": 0,
// "createdTime": "2018-09-19T15:59:31.403Z",
// "endTime": "2018-09-19T15:59:31.403Z",
// "fee": 0,
// "hash": 0,
// "id": 0,
// "modifiedTime": "2018-09-19T15:59:31.403Z",
// "period": 0,
// "rateId": 0,
// "startTime": "2018-09-19T15:59:31.403Z",
// "state": 0,
// "username": "string"

const OrderManage = ({dispatch, orderManage, loading}) => {

  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'username',
      dataIndex: 'username',
      key: 'username'
    },
    {
      title: 'hash',
      dataIndex: 'hash',
      key: 'hash'
    },
    {
      title: 'startTime',
      dataIndex: 'startTime',
      key: 'startTime'
    },
    {
      title: 'endTime',
      dataIndex: 'endTime',
      key: 'endTime'
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <a href="javascript:;" onClick={() => {
            ordersSucceed(record.id)
          }}>同意</a>
        </span>
      ),
    }
  ];

  const ordersSucceed = (id) => {
    dispatch({
      type: 'orderManage/ordersSucceed',
      payload: {id: id}
    })
  };
  return (
    <div>
      <Table
        bordered={true}
        dataSource={orderManage.orders.content}
        loading={loading.models.orderManage}
        columns={columns}
        rowKey={record => record.salt}/>
    </div>)
};

export default connect(({orderManage, loading}) => ({orderManage, loading}))(OrderManage)
