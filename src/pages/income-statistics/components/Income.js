import React from 'react'
import {connect} from 'dva'
import Groupedcolumn from "./Groupedcolumn";

const Income = ({income}) => {
  return (
    <div style={{width:900}}>
      <Groupedcolumn {...income.chart}/>
    </div>
  )
};

export default connect(({income}) => ({income}))(Income);
