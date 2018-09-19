import React from "react";
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util
} from "bizcharts";
import DataSet from "@antv/data-set";
import moment from 'moment'


class Groupedcolumn extends React.Component {
  render() {
    const data = this.props.data;
    // data.map(item=>{
    //   item.day = moment(item.day).format('MM-DD');
    //   return item
    // });
    return (

      <Chart height={400} data={data} forceFit={true}>
        <Coord scale={[0.9, 1]}/>
        <Axis name="date" label={{
          offset: 30,
          autoRotate:true
        }}/>
        <Axis name="value" label={{
          offset: 30,
          formatter(text, item, index) {
            return text + "btc";
          },
        }}/>
        <Tooltip
          crosshairs={{
            type: 'cross',
            style: {
              lineWidth: 2,
              stroke: "#30344d",
            }
          }}/>
        <Geom
          type="interval"
          position="date*value" //x * y
          tooltip={['date*value', (date, value) => {
            return {
              //自定义 tooltip 上显示的 title 显示内容等。
              name: '收入',
              title: '时间:' + date,
              value: value + 'btc'
            };
          }]}
        />
      </Chart>

    );
  }
}

export default Groupedcolumn;
