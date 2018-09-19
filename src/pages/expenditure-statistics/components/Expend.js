import React from 'react'
import {connect} from 'dva'
import Groupedcolumn from "../../income-statistics/components/Groupedcolumn";

const Expend = ({expend}) => {
  return (
    <div style={{width:900}}>
      <Groupedcolumn {...expend.chart}/>
    </div>
  )
};

export default connect(({expend}) => ({expend}))(Expend);
