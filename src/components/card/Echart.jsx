import React, { useRef, useEffect, useContext } from 'react';

import * as echarts from 'echarts';
import 'echarts-gl';

import { ChartResizeContext } from 'store/providers/chart-resize';

export default ({ option }) => {
  const { state } = useContext(ChartResizeContext);
  const divRef = useRef(null);
  useEffect(() => {
    const dom = (divRef.current);
    const chartIns = echarts.init(dom);
    chartIns.setOption(option);
  }, [option]);
  useEffect(() => {
    const dom = divRef.current;
    const width = dom.offsetWidth;
    const height = dom.offsetHeight;
    if (width && height) {
      const chartIns = echarts.getInstanceByDom(dom);
      chartIns.resize({
        width: width,
        height: height
      });
    }
  }, [state]);
  return (
    <div ref={divRef} className='w-100 h-100'></div>
  );
}