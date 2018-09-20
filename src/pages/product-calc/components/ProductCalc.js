import React from 'react';
import {connect} from 'dva';
import {Button, message, Table, Divider} from 'antd'
import EditableTable from "../../../components/tables";
import ParameterModal from "./ParameterModal";

const ProductCalc = ({dispatch, product, loading}) => {

  const {tableData, isAddNew, editingKey} = product;

  const columns = [
    {
      title: '参数名',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '参数值',
      dataIndex: 'value',
      key: 'value',
      editable: true,
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <ParameterModal record={record} onOk={addParameters} title={'修改'}>
            <a href="javascript:;">修改</a>
          </ParameterModal>
      <Divider type="vertical"/>
      <a href="javascript:;" onClick={() => {
        delParameters(record.name)
      }}>删除</a>
    </span>
      ),
    }
  ];

  const addParameters = (values) => {
    dispatch({
      type: 'product/addParameters',
      payload: {...values}
    })
  };

  const delParameters = (name) => {
    dispatch({
      type: 'product/delParameters',
      payload: {name: name}
    })

  };


  return (<div>
    <ParameterModal onOk={addParameters} title={'添加'}>
      <Button type='primary'> 添加参数</Button>
    </ParameterModal>
    <Table dataSource={tableData} columns={columns}/>
  </div>)
};

export default connect(({product, loading}) => ({product, loading}))(ProductCalc)
