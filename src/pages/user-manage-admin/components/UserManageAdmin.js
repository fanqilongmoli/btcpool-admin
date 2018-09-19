import React from 'react'
import {Table, Divider, Row, Col, Button} from 'antd'
import {connect} from 'dva'
import UserModal from "./UserModal";


const UserManageAdmin = ({dispatch,userManageAdmin, loading}) => {

  const saveAdminUser = (values) => {
    dispatch({
      type:'userManageAdmin/addAdminUser',
      payload:{...values}
    })

  };
  const delAdminUser = (username) =>{
    dispatch({
      type:'userManageAdmin/delAdminUser',
      payload:{username:username}
    })
  };

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
          <UserModal record={record} onOk={saveAdminUser} title={'修改'}>
            <a href="javascript:;">修改</a>
          </UserModal>
      <Divider type="vertical"/>
      <a href="javascript:;" onClick={()=>{delAdminUser(record.username)}}>删除</a>
    </span>
      ),
    }
  ];

  return (
    <div>
      <Row>
        <Col>
          <UserModal onOk={saveAdminUser} title={'添加管理员'}>
            <Button type="primary">添加管理员</Button>
          </UserModal>
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
