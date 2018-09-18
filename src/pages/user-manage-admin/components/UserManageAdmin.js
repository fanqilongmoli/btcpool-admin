import React from 'react'
import {Table, Divider,Row,Col,Button} from 'antd'
import {connect} from 'dva'


const UserManageAdmin = ({userManageAdmin, loading}) => {
  const columns = [{
    title: '用户名',
    dataIndex: 'username',
    key: 'username',
  }, {
    title: '创建时间',
    dataIndex: 'createdTime',
    key: 'createdTime',
  },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
      <a href="javascript:;">修改 {record.username}</a>
      <Divider type="vertical"/>
      <a href="javascript:;">删除</a>
    </span>
      ),
    }
  ];

  return (
    <div>
      <Row>
        <Col>
          <Button>添加管理员</Button>
        </Col>
      </Row>
      <Table
        bordered={true}
        dataSource={userManageAdmin.adminUser.content}
        loading={loading.models.userManageAdmin}
        columns={columns}
        rowKey={record => record.salt}/>
    </div>
  )
};

export default connect(({userManageAdmin, loading}) => ({userManageAdmin, loading}))(UserManageAdmin);
