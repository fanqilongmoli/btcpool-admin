import React from 'react';
import {Modal, Form, Input} from 'antd';

const FormItem = Form.Item;

class ParameterModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  showModelHandler = (e) => {
    if (e) e.stopPropagation();
    this.setState({
      visible: true,
    });


  };

  hideModelHandler = () => {
    this.setState({
      visible: false,
    });
  };

  okHandler = () => {
    const {onOk} = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        onOk(values);
        this.hideModelHandler();
      }
    });
  };

  render() {
    const {children,title} = this.props;
    const {getFieldDecorator} = this.props.form;
    const {name, value} = this.props.record?this.props.record:'';
    const formItemLayout = {
      labelCol: {span: 6},
      wrapperCol: {span: 14},
    };
    console.log('this.props', this.props);

    return (
      <span>
        <span onClick={this.showModelHandler}>
          {children}
        </span>
        <Modal
          title={title}
          destroyOnClose={true}
          visible={this.state.visible}
          onOk={this.okHandler}
          onCancel={this.hideModelHandler}
        >
          <Form horizontal onSubmit={this.okHandler}>
            <FormItem
              {...formItemLayout}
              label="参数名"
            >
              {
                getFieldDecorator('name', {
                  initialValue: name,
                  rules: [
                    {
                      required: true,
                      message: '请输入参数名'
                    },
                  ],
                })(<Input disabled={title==='修改'}/>)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="参数值"
            >
              {
                getFieldDecorator('value', {
                  initialValue: value,
                  rules: [
                    {
                      required: true,
                      message: '参数值'
                    },
                  ],
                })(<Input />)
              }
            </FormItem>

          </Form>
        </Modal>
      </span>
    );
  }
}

export default Form.create()(ParameterModal);
