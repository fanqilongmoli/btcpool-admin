import React from 'react'
import styles from './EditableTable.less'
import {Table, Input, InputNumber, Popconfirm, Form} from 'antd';
//createContext  了解更多看看这个===> https://www.cnblogs.com/qiqi105/p/8881097.html
const EditableContext = React.createContext();
const FormItem = Form.Item;

//行
const EditableRow = ({form, index, ...props}) => (
  //Provide 数据的提供方
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

//单元格
const EditableCell = ({
                        editing,
                        dataIndex,
                        title,
                        inputType,
                        record,
                        index,
                        onChangeFunc,
                        ...restProps,
                      }) => {
  const getInput = (inputType,record) => {
    if (inputType === 'number') {
      return <InputNumber onChange={(e)=>onChangeFunc?onChangeFunc(e,record):''}/>;
    }
    return <Input onChange={(e)=>onChangeFunc?onChangeFunc(e,record):''}/>;
  };
  return (
    //Consumer 数据的订阅方
    <EditableContext.Consumer>
      {(form) => {
        const {getFieldDecorator} = form;
        return (
          <td {...restProps}>
            {editing ? (
              <FormItem style={{margin: 0}}>
                {getFieldDecorator(dataIndex, {
                  rules: [{
                    required: true,
                    message: `请输入${title}!`,
                  }],
                  initialValue: record[dataIndex],
                })(getInput(inputType,record))}
              </FormItem>
            ) : restProps.children}
          </td>
        );
      }}
    </EditableContext.Consumer>
  );

};

/**
 * 可编辑表格
 * @param loading 加载状态
 * @param editingKey 编辑的列key
 * @param tableData tab数据源
 * @param columns 列定义
 * @param delConstValue 删除操作
 * @param editConstValue 编辑操作
 * @param cancelConstValue 编辑取消操作
 * @param saveConstValue 编辑保存操作
 * @param deleteTip 删除的tip提示语
 * @returns {*}
 * @constructor
 */
const EditableTable = ({
                         loading,
                         editingKey,
                         tableData,
                         columns,
                         delConstValue,
                         editConstValue,
                         cancelConstValue,
                         saveConstValue,
                         deleteTip,
                         editingFunc,
                       }) => {
  const components = {

    body: {
      row: EditableFormRow,
      cell: EditableCell,
    },
  };
  columns.push(
    {
      title: '操作',
      key: 'operation',
      render: (text, record) => {
        const editable = editingKey === record.name;
        return (<div>
          {
            //inoperable 判断行操作
            record.inoperable ? '---':(editable ? (<span className={styles.link}>
                  <EditableContext.Consumer>
                    {form => (
                      <a onClick={() => {
                        saveConstValue(form, record)
                      }}>保存</a>
                    )}
                  </EditableContext.Consumer>

                    <Popconfirm title={"确认取消?"}
                                onConfirm={() => {
                                  cancelConstValue(record)
                                }}>
                      <a>取消</a>
                    </Popconfirm>
                    </span>)
              : (<span className={styles.link}>
                    <a onClick={() => {
                      editConstValue(record)
                    }}>编辑</a>
                    <Popconfirm
                      title={deleteTip}
                      onConfirm={() => {
                        delConstValue(record)
                      }}>
                      <a>删除</a>
                    </Popconfirm>
                    </span>))
          }
        </div>)

      },
    }
  );

  const columnsTemp = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: record => ({
        record,
        inputType: col.inputType,
        dataIndex: col.dataIndex,
        title: col.title,
        editing: editingFunc?editingFunc(record,col,editingKey):editingKey===record.name,
        onChangeFunc:col.onChange,
      }),
    };
  });

  return (
    <Table
      loading={loading}
      pagination={false}
      components={components}
      bordered
      rowKey={record => record.name}
      dataSource={tableData}
      columns={columnsTemp}
      rowClassName="editable-row"
    />
  )

};

export default EditableTable;
