import React from 'react'
import {Table,Row,Col,Button,Pagination} from 'antd'
import {connect} from 'dva'

const columns = [{
  title: '手机',
  dataIndex: 'mobile',
  key: 'mobile',
}, {
  title: '余额',
  dataIndex: 'balance',
  key: 'balance',
}, {
  title: '邀请ID',
  dataIndex: 'invitedId',
  key: 'invitedId',
}, {
  title: '创建时间',
  dataIndex: 'createdTime',
  key: 'createdTime',
},
];

const UserManage = ({dispatch,userManage, loading}) => {

  const {users} = userManage;
  const pageChange = (page, pageSize) => {
    dispatch({
      type: 'userManage/accounts',
      payload: {page: page - 1, size: pageSize}
    })
  };

  return (
    <div>

      <Table
        bordered={true}
        dataSource={userManage.users.content}
        columns={columns}
        loading={loading.models.userManage}
        pagination={false}
        rowKey={record => record.salt}/>
      <Pagination onChange={pageChange} pageSize={users.size} current={users.number + 1} total={users.totalElements}/>

    </div>
  )
};

export default connect(({userManage, loading}) => ({userManage, loading}))(UserManage);
