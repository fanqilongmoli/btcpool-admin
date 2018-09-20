import React from 'react';
import {connect} from 'dva';
import moment from 'moment-timezone'
import {Table, Row, Col, Button, Pagination} from 'antd'

const OrderManage = ({dispatch, orderManage, loading}) => {

  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: '用户名',
      dataIndex: 'username',
      key: 'username'
    },
    {
      title: '购买算力',
      dataIndex: 'hash',
      key: 'hash'
    },
    {
      title: '产品ID',
      dataIndex: 'rateId',
      key: 'rateId'
    },
    {
      title: '创建时间',
      dataIndex: 'createdTime',
      key: 'createdTime',
      render: (text, record) =>{
        return moment(record.createdTime).format('YYYY-MM-DD HH:mm:ss')
      }

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

  const pageChange = (page, pageSize) => {
    dispatch({
      type: 'orderManage/orders',
      payload: {page: page - 1, size: pageSize}
    })
  };

  const {orders} = orderManage;
  return (
    <div>
      <Table
        bordered={true}
        dataSource={orderManage.orders.content}
        loading={loading.models.orderManage}
        columns={columns}
        pagination={false}
        rowKey={record => record.salt}/>
      <Pagination onChange={pageChange} pageSize={orders.size} current={orders.number + 1} total={orders.totalElements}/>
    </div>)
};

export default connect(({orderManage, loading}) => ({orderManage, loading}))(OrderManage)
