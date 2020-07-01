import React, { Component } from 'react';
import { Chart } from '@antv/g2';
import { Card } from 'antd';

class TraceChart extends Component {
  componentDidMount() {
    const data = [
      { lon: 100.33, lat: 29.34, year: 1 },
      { lon: 100.66, lat: 30.05, year: 2 },
      { lon: 100.94, lat: 30.54, year: 3 },
      { lon: 101.23, lat: 30.92, year: 4 },
      { lon: 101.55, lat: 31.25, year: 5 },
      { lon: 101.97, lat: 31.53, year: 6 },
      { lon: 101.28, lat: 31.93, year: 7 },
      { lon: 101.69, lat: 32.23, year: 8 },
      { lon: 102.97, lat: 32.50, year: 9 },
      { lon: 103.15, lat: 33.12, year: 10 },
      { lon: 103.54, lat: 33.58, year: 11 },
      { lon: 103.59, lat: 33.87, year: 12 },
 
      
      
    ];
    const chart = new Chart({
      container: 'traceChart',
      autoFit: true,
      height: 350,
      width: 550,
    });
    chart.data(data);
    chart.scale({
      lat: { nice: true },
      lon: { nice: true },
    });
    chart
      .path()
      .animate({
        appear: {
          animation: 'path-in',
          duration: 6000,
          easing: 'easeLinear',
        }
      })
      .position('lat*lon')
      .label('year', (val) => {
        return {
          content: `T${val} `,
          animate: {
            appear: {
              delay: 1000
            }
          }
        };
      });
    chart
      .point()
      .animate({
        appear: {
          appear: 'fade-in',
          duration: 200,
          delay: (obj) => {
            const index = data.findIndex(item => item.year === obj.year);
            return index * (1000 / data.length);
          },
          easing: 'easeLinear',
        }
      })
      .position('lat*lon')
      .shape('square');
    chart.render();  
  }

  render() {
    return (
      <Card style={{width: '500px'}} title='定位轨迹'>
        <div id='traceChart' style={{height: '250px', width: '400px'}}></div>
      </Card>
    )
  }

}

export default TraceChart;