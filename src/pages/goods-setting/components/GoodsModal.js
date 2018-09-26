import React from 'react';
import {Modal, Form, Input, InputNumber, DatePicker, Select} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

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

  onSelect = (value, option)=>{
      this.setState({
        need:value==1
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

    const {children, title} = this.props;
    const {getFieldDecorator} = this.props.form;
    const formItemLayout = {
      labelCol: {span: 8},
      wrapperCol: {span: 8},
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
              label="产品周期(年)"
            >
              {
                getFieldDecorator('period', {
                  rules: [
                    {
                      required: true,
                      message: '产品周期(年)'
                    },
                  ],
                })(<InputNumber style={{width:'100%'}}/>)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="单价(btc)"
            >
              {
                getFieldDecorator('price', {
                  rules: [
                    {
                      required: true,
                      message: '请输入单价'
                    },
                  ],
                })(<InputNumber style={{width:'100%'}}/>)
              }
            </FormItem>
             <FormItem
               {...formItemLayout}
               label="总量(算力总量)"
             >
              {
                getFieldDecorator('total', {
                  rules: [
                    {
                      required: true,
                      message: '请输入总量'
                    },
                  ],
                })(<InputNumber style={{width:'100%'}}/>)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="最小交易规格"
            >
              {
                getFieldDecorator('min', {
                  rules: [
                    {
                      required: true,
                      message: '请输入单笔最小交易规格'
                    },
                  ],
                })(<InputNumber style={{width:'100%'}}/>)
              }
            </FormItem>
             <FormItem
               {...formItemLayout}
               label="电费类型"
             >
              {
                getFieldDecorator('electricityFeeType', {
                  rules: [
                    {
                      required: true,
                      message: '请选择电费类型'
                    },
                  ],
                })(<Select onSelect={this.onSelect}>
                    <Option value="0">包含电费</Option>
                    <Option value="1">按天计费</Option>
                  </Select>
                )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="电费单价(BTC/天)"
              style={{ display: this.state.need ? 'block' : 'none' }}
            >
              {
                getFieldDecorator('electricityFee', {
                  rules: [
                    {
                      required: this.state.need,
                      message: '请输入电费价格'
                    },
                  ],
                })(<InputNumber style={{width:'100%'}}/>)
              }
            </FormItem>
          </Form>
        </Modal>
      </span>
    );
  }
}

export default Form.create()(GoodsModal);
