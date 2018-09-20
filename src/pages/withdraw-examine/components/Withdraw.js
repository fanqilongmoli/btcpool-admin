import React from 'react'
import {connect} from 'dva'
import {Table, Row, Col, Button, Pagination, Select} from 'antd'

const Option = Select.Option;

const Withdraw = ({dispatch, withdraw, loading}) => {

  const columns = [
    {
      title: '订单id',
      dataIndex: 'id',
      key: 'id',
    }, {
      title: '用户名',
      dataIndex: 'username',
      key: 'username',
    }, {
      title: '提现数量',
      dataIndex: 'value',
      key: 'value',
    }, {
      title: '状态',
      dataIndex: 'state',
      key: 'state',
      render: (text, record) =>{
        return record.state === 0 ?"未通过":'已通过'
      }
    }, {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          {record.state === 0 ? (<a href="javascript:;" onClick={() => {
            withdrawApplySuccess(record.id)
          }}>通过</a>) : ''}
        </span>
      ),
    }
  ];

  const {withdraws} = withdraw;
  const pageChange = (page, pageSize) => {
    dispatch({
      type: 'withdraw/withdrawApply',
      payload: {page: page - 1, size: pageSize}
    })
  };

  const withdrawApplySuccess = (id) => {
    dispatch({
      type: 'withdraw/withdrawApplySuccess',
      payload: {id: id}
    })
  };

  const selectChange = (value) => {
    dispatch({
      type: 'withdraw/updateState',
      payload: {state: value}
    });
    dispatch({
      type: 'withdraw/withdrawApply',
      payload: {page: 0, size: 10}
    })
  };

  return (
    <div>
      <Select style={{width: 120}} defaultValue="0" onChange={selectChange}>
        <Option value="0">未通过</Option>
        <Option value="1">已通过</Option>
      </Select>
      <Table
        bordered={true}
        dataSource={withdraws.content}
        columns={columns}
        loading={loading.models.withdraw}
        pagination={false}
        rowKey={record => record.salt}/>
      <Pagination onChange={pageChange} pageSize={withdraws.size} current={withdraws.number + 1}
                  total={withdraws.totalElements}/>

    </div>)
};

export default connect(({withdraw, loading}) => ({withdraw, loading}))(Withdraw)
