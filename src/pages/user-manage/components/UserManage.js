import React from 'react'
import {Table,Row,Col,Button} from 'antd'
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

const UserManage = ({userManage, loading}) => {
  return (
    <div>

      <Table
        bordered={true}
        dataSource={userManage.users.content}
        columns={columns}
        loading={loading.models.userManage}
        rowKey={record => record.salt}/>

    </div>
  )
};

export default connect(({userManage, loading}) => ({userManage, loading}))(UserManage);
