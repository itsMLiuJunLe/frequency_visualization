import React, { useContext, useState } from 'react';
import { Button } from 'antd';
import { RequestAddrContext, CHANGE_ADDR } from 'store/providers/request-addr';

export default () => {

  const { dispatch } = useContext(RequestAddrContext);
  const [index,setIndex] = useState(1);

  return (
    <div style={{position:'absolute',top:0,right:0}}>
      <Button type='primary' size='large' onClick={() => {
        if (index === 2) {
          setIndex(3)
        } else if (index === 3) {
          setIndex(1)
        } else if (index === 1){
          setIndex(2)
        }
        dispatch({
          type: CHANGE_ADDR,
          data: index
        })
      }}>切换域频管预测数据</Button>
    </div>
  )
}