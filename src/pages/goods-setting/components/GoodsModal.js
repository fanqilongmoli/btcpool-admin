import React from 'react';
import {Modal, Form, Input,InputNumber,DatePicker} from 'antd';

const FormItem = Form.Item;

class GoodsModal extends React.Component {

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

    /**
     * "balance": 0, //余量
     "createdTime": "2018-09-19T03:29:44.218Z", 创建时间
     "deleted": true,
     "endTime": "2018-09-19T03:29:44.218Z",
     "id": 0,
     "max": 0, //单笔最大交易量
     "min": 0, // 单笔最小交易量
     "modifiedTime": "2018-09-19T03:29:44.218Z",
     "period": 0, // 产品周期
     "price": 0, //单价
     "startTime": "2018-09-19T03:29:44.218Z",
     "total": 0 // 总量
     * @constructor
     */

    const {children,title} = this.props;
    const {getFieldDecorator} = this.props.form;
    const formItemLayout = {
      labelCol: {span: 6},
      wrapperCol: {span: 14},
    };
    // console.log('this.props', this.props);

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
              label="产品周期"
            >
              {
                getFieldDecorator('period', {
                  rules: [
                    {
                      required: true,
                      message: '产品周期'
                    },
                  ],
                })(<InputNumber/>)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="单价"
            >
              {
                getFieldDecorator('price', {
                  rules: [
                    {
                      required: true,
                      message: '请输入单价'
                    },
                  ],
                })(<InputNumber />)
              }
            </FormItem>
             <FormItem
               {...formItemLayout}
               label="总量"
             >
              {
                getFieldDecorator('total', {
                  rules: [
                    {
                      required: true,
                      message: '请输入总量'
                    },
                  ],
                })(<InputNumber />)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="单笔最大交易量"
            >
              {
                getFieldDecorator('max', {
                  rules: [
                    {
                      required: true,
                      message: '请输入单笔最大交易量'
                    },
                  ],
                })(<InputNumber />)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="单笔最小交易量"
            >
              {
                getFieldDecorator('min', {
                  rules: [
                    {
                      required: true,
                      message: '请输入单笔最小交易量'
                    },
                  ],
                })(<InputNumber />)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="开始时间"
            >
              {
                getFieldDecorator('startTime', {
                  rules: [
                    {
                      required: true,
                      message: '请输入开始时间'
                    },
                  ],
                })(<DatePicker />)
              }
            </FormItem>

          </Form>
        </Modal>
      </span>
    );
  }
}

export default Form.create()(GoodsModal);
