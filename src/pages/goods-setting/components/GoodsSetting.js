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
import React from 'react'
import {Table, Row, Col, Button} from 'antd'
import {connect} from 'dva'
import GoodsModal from "./GoodsModal";

const GoodsSetting = ({dispatch, goods, loading}) => {
  const columns = [{
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  }, {
    title: '总量(TH/s)',
    dataIndex: 'total',
    key: 'total',
  },
    {
      title: '单价',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: '产品周期(年)',
      dataIndex: 'period',
      key: 'period',
    },
    {
      title: '余额(TH/s)',
      dataIndex: 'balance',
      key: 'balance',
    },
    {
      title: '最小交易规格(TH/s)',
      dataIndex: 'min',
      key: 'min',
    },

    {
      title: '电费类型',
      dataIndex: 'electricityFeeType',
      key: 'electricityFeeType',
      render: (text, record) => {
        return record.electricityFeeType ==1?'按天计费':'包含电费'

      }
    },
    {
      title: '电费价格(btc/天)',
      dataIndex: 'electricityFee',
      key: 'electricityFee',
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <a href="javascript:;" onClick={() => {
            delGoods(record.id)
          }}>删除</a>
        </span>
      ),
    }
  ];


  const saveGoods = (values) => {

    console.log('saveGoods', values);
    dispatch({
      type: 'goods/addHashrates',
      payload: {...values}
    })
  };

  const delGoods = (id) => {
    dispatch({
      type: 'goods/delHashrates',
      payload: {id: id}
    })
  };


  return (
    <div>
      <Row>
        <Col>
          <GoodsModal onOk={saveGoods} title={'添加商品'}>
            <Button type="primary">添加商品</Button>
          </GoodsModal>
        </Col>
      </Row>
      <Table
        bordered={true}
        dataSource={goods.tableData}
        loading={loading.models.goods}
        columns={columns}
        rowKey={record => record.salt}/>
    </div>
  )
};


export default connect(({goods, loading}) => ({goods, loading}))(GoodsSetting)
