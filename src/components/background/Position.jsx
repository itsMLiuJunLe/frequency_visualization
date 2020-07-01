import React, { Component } from 'react';
import { Chart } from '@antv/g2';
import { Card } from 'antd';

class PositionChart extends Component {
  componentDidMount() {
    const data = [
      { year: 'T1', amplitude: -70.43 },
      { year: 'T2', amplitude: -69.72},
      { year: 'T3', amplitude: -70.12 },
      { year: 'T4', amplitude: -68.32 },
      { year: 'T5', amplitude: -67.11},
      { year: 'T6', amplitude: -67.22},
      { year: 'T7', amplitude: -67.53 },
      { year: 'T8', amplitude: -67.02},
      { year: 'T9', amplitude: -66.89},
      { year: 'T10', amplitude: -71.23 },
      { year: 'T11', amplitude: -71.02},
      { year: 'T12', amplitude: -70.89},
    ];
    const chart = new Chart({
      container: 'PositionChart',
      autoFit: true,
      height: 250,
    });
    
    chart.data(data);
    chart.scale({
      year: {
        range: [0, 1],
      },
      amplitude: {
        min: 0,
        nice: true,
      },
    });
    
    chart.tooltip({
      showCrosshairs: true, // 展示 Tooltip 辅助线
      shared: true,
    });
    
    chart.line().position('year*amplitude').label('amplitude');
    chart.point().position('year*amplitude');
    
    chart.render();
}
render() {
  return (
    <Card title='轨迹数据(时间/幅度(dBm))'>
      <div id='PositionChart' style={{height: '250px', width: '400px'}}></div>
    </Card>
  )
}
}

export default PositionChart;
